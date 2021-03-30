import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'ngx-engine-add',
  templateUrl: './engine-add.component.html',
  styleUrls: ['./engine-add.component.scss']
})
export class EngineAddComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Motori',
      path: '/pages/engines'
    },
    {
      title: 'Dodaj motor',

    }
  ]
  constructor() { }

 

  ngOnInit() {
    
  }







}
