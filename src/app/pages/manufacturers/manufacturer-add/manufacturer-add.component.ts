import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'ngx-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.scss']
})
export class ManufacturerAddComponent implements OnInit {
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
  constructor() { }

  manufacturerOptions: string[];

  ngOnInit() {

  }







}
