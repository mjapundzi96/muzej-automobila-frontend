import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.scss']
})
export class OwnerAddComponent implements OnInit {
  @Input() edit: boolean;
  id: number;
  breadcrumbs: Array<BreadcrumbItem>;

  form: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  address: AbstractControl;
  dateOfBirth: AbstractControl;
  oib: AbstractControl;
  image: AbstractControl

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
      oib: ['', Validators.required, Validators.maxLength(10)],
      image: [""],
    })

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.address = this.form.controls['address'];
    this.dateOfBirth = this.form.controls['dateOfBirth'];
    this.oib = this.form.controls['oib'];
    this.image = this.form.controls['image'];

    if (this.edit) {
      this.route.params.subscribe(params => {
        const id = parseInt(params.id);
        if (id) {
          this.id = id
          this.apiService.fetchSingleOwner(this.id).subscribe(res => {
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
        title: 'Vlasnici',
        path: '/pages/owners'
      },
      {
        title: this.edit ? 'Uredi vlasnika' : 'Dodaj vlasnika',

      }
    ]
  }

  onSubmit() {
    const data = this.form.getRawValue();
    this.apiService.createOwner(data).subscribe(res => {
      this.toastrService.success("Vlasnik uspješno kreiran", "Success")
      this.router.navigateByUrl("/pages/owners/list")
    })
  }





}
