import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
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
      title: 'Popis vlasnika',

    }
  ]
  data = [
    {
      fullname: "Ivan Horvat",
      oib: "7549434590",
      address: "Heinzlova 2, 10000 Zagreb",
      dob: "1.8.1974."
    },
    {
      fullname: "Ante Taraba",
      oib: "1249434590",
      address: "Maksimirska 160, 10000 Zagreb",
      dob: "4.2.1986."
    },
    {
      fullname: "Josip Mikšić",
      oib: "3423423590",
      address: "Ulica 1, Osijek 31000",
      dob: "1.8.1974."
    },
  ]
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

}
