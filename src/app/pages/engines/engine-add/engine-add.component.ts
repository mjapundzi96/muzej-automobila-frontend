import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { engineTypes } from '../../../@core/constants/engineTypes';
import { EngineType } from '../../../@core/models/engine.model';
import { Manufacturer } from '../../../@core/models/manufacturer.model';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-engine-add',
  templateUrl: './engine-add.component.html',
  styleUrls: ['./engine-add.component.scss']
})
export class EngineAddComponent implements OnInit {
  @Input() edit: boolean;
  id: number;

  typeOptions = engineTypes
  manufacturerOptions: Array<Manufacturer> = []
  manufacturerFilteredOptions: Array<Manufacturer> = []
  breadcrumbs: Array<BreadcrumbItem>;

  form: FormGroup;
  name: AbstractControl;
  torque: AbstractControl
  power: AbstractControl;
  type: AbstractControl;
  maker: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastrService: NbToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    this.form = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      torque: [0, Validators.required],
      power: [0, Validators.required],
      type: ['', Validators.required],
      maker: ['', Validators.required]
    })

    this.name = this.form.controls['name']
    this.torque = this.form.controls['torque']
    this.power = this.form.controls['power']
    this.type = this.form.controls['type']
    this.maker = this.form.controls['maker']

    if (this.edit) {
      this.route.params.subscribe(params => {
        const id = parseInt(params.id);
        if (id) {
          this.id = id
          this.apiService.fetchSingleEngine(this.id).subscribe(res => {
            this.form.patchValue(res.response)
          })
        }
      })

    }

    this.breadcrumbs = [
      {
        title: 'Home',
        path: '/pages/home',
      },
      {
        title: 'Motori',
        path: '/pages/engines'
      },
      {
        title: this.edit ? 'Uređivanje motora' : 'Dodavanje motora',
  
      }
    ]
    this.fetchManufacturerOptions()
  }

  fetchManufacturerOptions() {
    this.apiService.fetchAllManufacturers({
      command: {},
      pagination: {
        sortProperty: 'name',
        sortDirection: "asc",
        size: 100,
        currentPage: 1
      }
    }).subscribe(res => {
      this.manufacturerOptions = res.response
      this.manufacturerFilteredOptions = res.response
    })
  }

  onChangeManufacturerSearch(e) {
    const value = e.target.value as string;
    this.manufacturerFilteredOptions = this.manufacturerOptions.filter(option => option.name.includes(value))
  }

  onSelectManufacturer(manufacturer: Manufacturer) {
    this.maker.setValue(manufacturer)
  }

  onSubmit(){
    this.apiService.createOrEditEngine(this.form.getRawValue()).subscribe(()=>{
      this.toastrService.success('Motor uspješno kreiran','Success');
      this.router.navigateByUrl("/pages/engines/list")
    })
  }



}
