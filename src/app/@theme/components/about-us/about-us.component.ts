import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'ngx-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title:'O nama'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
