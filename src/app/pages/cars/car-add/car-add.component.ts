import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbItem } from './../../../@theme/components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'ngx-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Automobili',
      path: '/pages/cars'
    },
    {
      title: 'Dodaj automobil',

    }
  ]
  constructor() { }

  ownerOptions: string[];

  ngOnInit() {
    this.ownerOptions = ['Audi', 'Mercedes', 'BMW'];

  }







}
