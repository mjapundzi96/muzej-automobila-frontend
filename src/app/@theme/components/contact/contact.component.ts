import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'ngx-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Kontakt',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
