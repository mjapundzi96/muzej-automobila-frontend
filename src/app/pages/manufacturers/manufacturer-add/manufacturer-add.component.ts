import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.scss']
})
export class ManufacturerAddComponent implements OnInit {
  @Input() edit:boolean;
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Proizvođači',
      path: '/pages/manufacturers'
    },
    {
      title: 'Dodaj proizvođača',

    }
  ]

  form: FormGroup;
  name: AbstractControl;
  country: AbstractControl;
  address: AbstractControl;
  dateOfCreation: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastrService: NbToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      dateOfCreation: ['', Validators.required],
    })

    this.name = this.form.controls['name'];
    this.country = this.form.controls['country']
    this.address = this.form.controls['address']
    this.dateOfCreation = this.form.controls['dateOfCreation']
  }

  onSubmit(){
    this.apiService.createManufacturer(this.form.value).subscribe(_=>{
      if (_){
        this.toastrService.success('Manufacturer successfully created!','Success');
        this.router.navigateByUrl("/pages/manufacturers/list")
      }
    })
  }







}
