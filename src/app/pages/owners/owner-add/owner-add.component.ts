import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'ngx-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.scss']
})
export class OwnerAddComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Vlasnici',
      path: '/pages/owners'
    },
    {
      title: 'Dodaj vlasnika',

    }
  ]
  constructor() { }


  ngOnInit() {
    

  }







}
