import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'

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
  constructor() { }

  ngOnInit() {
    

  }







}
