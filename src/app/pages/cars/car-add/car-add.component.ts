import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Engine } from '../../../@core/models/engine.model';
import { Manufacturer } from '../../../@core/models/manufacturer.model';
import { Owner } from '../../../@core/models/owner.model';
import { ApiService } from '../../../services/api.service';
import { BreadcrumbItem } from './../../../@theme/components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'ngx-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {
  @Input() edit: boolean;
  id: number;
  breadcrumbs: Array<BreadcrumbItem>;

  ownerOptions: Array<Owner> = []
  ownerFilteredOptions: Array<Owner> = []

  manufacturerOptions: Array<Manufacturer> = []
  manufacturerFilteredOptions: Array<Manufacturer> = []

  engineOptions: Array<Engine> = []
  engineFilteredOptions: Array<Engine> = []


  form: FormGroup;
  name: AbstractControl;
  color: AbstractControl;
  manufactureDate: AbstractControl;
  image: AbstractControl;
  maker: AbstractControl;
  owner: AbstractControl;
  motor: AbstractControl;

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
      color: ['', Validators.required],
      manufactureDate: ['', Validators.required],
      image: ['', Validators.required],
      maker: ['', Validators.required],
      owner: ['', Validators.required],
      motor: ['', Validators.required]
    })

    this.name = this.form.controls['name']
    this.color = this.form.controls['color']
    this.manufactureDate = this.form.controls['manufactureDate']
    this.image = this.form.controls['image'];
    this.maker = this.form.controls['maker'];
    this.owner = this.form.controls['owner'];
    this.motor = this.form.controls['motor'];

    if (this.edit) {
      this.route.params.subscribe(params => {
        const id = parseInt(params.id);
        if (id) {
          this.id = id
          this.apiService.fetchSingleCar(this.id).subscribe(res => {
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
        title: 'Automobili',
        path: '/pages/cars'
      },
      {
        title: this.edit ? 'Dodavanje automobila' : 'Uređivanje automobila'

      }
    ]

    this.fetchManufacturerOptions();
    this.fetchEngineOptions();
    this.fetchOwnerOptions()
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

  fetchOwnerOptions() {
    this.apiService.fetchAllOwners({
      command: {},
      pagination: {
        sortProperty: 'lastName',
        sortDirection: "asc",
        size: 100,
        currentPage: 1
      }
    }).subscribe(res => {
      this.ownerOptions = res.response
      this.ownerFilteredOptions = res.response
    })
  }

  fetchEngineOptions() {
    this.apiService.fetchAllEngines({
      command: {},
      pagination: {
        sortProperty: 'name',
        sortDirection: "asc",
        size: 100,
        currentPage: 1
      }
    }).subscribe(res => {
      this.engineOptions = res.response
      this.engineFilteredOptions = res.response
    })
  }

  onChangeOwnerSearch(e) {
    const value = e.target.value as string;
    this.ownerFilteredOptions = this.ownerOptions.filter(option => option.firstName.includes(value) || option.lastName.includes(value))
  }

  onSelectOwner(owner: Owner) {
    this.owner.setValue(owner)
  }

  onChangeManufacturerSearch(e) {
    const value = e.target.value as string;
    this.manufacturerFilteredOptions = this.manufacturerOptions.filter(option => option.name.includes(value))
  }

  onSelectManufacturer(manufacturer: Manufacturer) {
    this.maker.setValue(manufacturer)
    this.maker.setErrors(null)
  }

  onChangeEngineSearch(e) {
    const value = e.target.value as string;
    this.engineFilteredOptions = this.engineOptions.filter(option => option.name.includes(value))
  }

  onSelectEngine(manufacturer: Engine) {
    this.motor.setValue(manufacturer)
  }

  onSubmit(){
    const data = this.form.getRawValue();
    delete data.motor.maker;
    this.apiService.createOrEditCar(this.form.getRawValue()).subscribe(()=>{
      this.toastrService.success('Automobil uspješno kreiran','Success');
      this.router.navigateByUrl("/pages/cars/list")
    })
  }

  onPhotoChange(imageUrl: string) {
    this.image.setValue(imageUrl)
  }

  onPhotoRemove() {
    this.image.setValue("");
  }

}
