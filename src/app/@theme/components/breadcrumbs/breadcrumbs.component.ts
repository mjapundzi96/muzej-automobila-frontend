import { Component, Input, OnInit } from '@angular/core';

export interface BreadcrumbItem {
  title: string;
  path?: string;
}

@Component({
  selector: 'ngx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  @Input() items: Array<BreadcrumbItem>
  constructor() { }

  ngOnInit(): void {
  }

}
