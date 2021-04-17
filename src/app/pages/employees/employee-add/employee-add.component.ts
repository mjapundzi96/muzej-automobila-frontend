import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { toBase64 } from '../../../@core/utils/helpers';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Zaposlenici',
      path: '/pages/employees'
    },
    {
      title: 'Dodaj zaposlenika',

    }
  ]

  form: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  address: AbstractControl;
  dateOfBirth: AbstractControl;
  dateOfEmployment: AbstractControl;
  oib: AbstractControl;
  email: AbstractControl;
  position: AbstractControl;
  active: AbstractControl;
  userRole: AbstractControl;
  image: AbstractControl;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [0, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['2012-12-05', Validators.required],
      dateOfEmployment: ['2012-12-01', Validators.required],
      oib: ['', Validators.required],
      email: ['', Validators.required],
      position: ['string', Validators.required],
      active: [true, Validators.required],
      userRole: [{ id: 1, name: "string", users: [] }, Validators.required],
      image: ["", Validators.required]
    })

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.address = this.form.controls['address'];
    this.dateOfBirth = this.form.controls['dateOfBirth'];
    this.dateOfEmployment = this.form.controls['dateOfEmployment'];
    this.oib = this.form.controls['oib'];
    this.email = this.form.controls['email'];
    /*     this.position = this.form.controls['position'];
        this.active = this.form.controls['active'];
        this.userRole = this.form.controls['userRole']; */
    this.image = this.form.controls['image'];

  }

  onSubmit() {
    this.apiService.createEmployee(this.form.getRawValue()).subscribe(res => {
      console.log(res)
    })
  }

  onPhotoChange(imageUrl: string) {
    this.image.setValue(imageUrl)
  }

  onPhotoRemove() {
    this.image.setValue("");
  }

}
