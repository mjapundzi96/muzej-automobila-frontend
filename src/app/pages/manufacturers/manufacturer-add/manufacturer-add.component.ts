import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.scss']
})
export class ManufacturerAddComponent implements OnInit {
  @Input() edit: boolean;
  id: number;

  breadcrumbs: Array<BreadcrumbItem>;

  form: FormGroup;
  name: AbstractControl;
  country: AbstractControl;
  address: AbstractControl;
  dateOfCreation: AbstractControl;
  image: AbstractControl;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastrService: NbToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      dateOfCreation: [''],
      image: ['']
    })

    this.name = this.form.controls['name'];
    this.country = this.form.controls['country']
    this.address = this.form.controls['address']
    this.dateOfCreation = this.form.controls['dateOfCreation']
    this.image = this.form.get('image')

    if (this.edit) {
      this.route.params.subscribe(params => {
        const id = parseInt(params.id);
        if (id) {
          this.id = id
          this.apiService.fetchSingleManufacturer(this.id).subscribe(res => {
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
        title: 'Proizvođači',
        path: '/pages/manufacturers'
      },
      {
        title: this.edit ? 'Uređivanje proizvođača' : 'Dodaj proizvođača',
      }
    ]
  }

  onSubmit() {
    const data = this.form.getRawValue()
    if (this.edit) {
      data.id = this.id
    }
    this.apiService.createOrEditManufacturer(data).subscribe(res => {
      if (res) {
        const message = 
          this.edit
            ? `Proizvođač ${res.response.name} uspješno uređen!`
            : `Proizvođač ${res.response.name} uspješno dodan!`
            this.toastrService.success(message, 'Success');
        this.router.navigateByUrl("/pages/manufacturers/list")
      }
    })
  }

  onPhotoChange(imageUrl: string) {
    console.log(imageUrl)
    this.form.get('image').setValue(imageUrl)
  }

  onPhotoRemove() {
    this.form.get('image').setValue("")
  }




}
