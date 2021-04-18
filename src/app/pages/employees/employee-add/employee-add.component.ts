
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { combineLatest, forkJoin } from 'rxjs';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  @Input() edit: boolean;
  id: number;
  breadcrumbs: Array<BreadcrumbItem>;

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
  password: AbstractControl;
  confirmPassword: AbstractControl;

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfEmployment: ['', Validators.required],
      oib: ['', Validators.required, Validators.maxLength(10)],
      email: ['', Validators.required],
      position: [''],
      active: [true],
      userRole: [{ id: 2, name: "EMPLOYEE", users: [] }],
      image: [""],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.address = this.form.controls['address'];
    this.dateOfBirth = this.form.controls['dateOfBirth'];
    this.dateOfEmployment = this.form.controls['dateOfEmployment'];
    this.oib = this.form.controls['oib'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.confirmPassword = this.form.controls['confirmPassword']
    this.position = this.form.controls['position']
    this.image = this.form.controls['image'];
    this.userRole = this.form.controls['userRole']

    if (this.edit) {
      this.route.params.subscribe(params => {
        const id = parseInt(params.id);
        if (id) {
          this.id = id
          this.apiService.fetchSingleEmployee(this.id).subscribe(res => {
            this.form.patchValue(res.response)
            this.userRole.setValue({ id: 2, name: "EMPLOYEE", users: [] })
          })
        }
      })

    }

    this.password.valueChanges.subscribe(() => {
      this.validatePassword()
    })

    this.confirmPassword.valueChanges.subscribe(() => {
      this.validatePassword()
    })

    this.breadcrumbs = [
      {
        title: 'Home',
        path: '/pages/home',
      },
      {
        title: 'Zaposlenici',
        path: '/pages/employees'
      },
      {
        title: this.edit ? 'Uređivanje zaposlenika' : 'Dodavanje zaposlenika',
      }
    ]
  }

  validatePassword() {
    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({ 'notMatch': true })
    }
    else this.confirmPassword.setErrors(null)
  }

  onSubmit() {
    const data = this.form.getRawValue();
    delete data["confirmPassword"];
    this.apiService.createEmployee(data).subscribe(res => {
      this.toastrService.success("Korisnik uspješno kreiran", "Success")
      this.router.navigateByUrl("/pages/employees/list")
    })
  }

  onPhotoChange(imageUrl: string) {
    this.image.setValue(imageUrl)
  }

  onPhotoRemove() {
    this.image.setValue("");
  }


}
