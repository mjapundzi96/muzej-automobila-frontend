import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.scss']
})
export class ManufacturerListComponent implements OnInit {
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
      title: 'Popis proizvođača',

    }
  ]
  data = [
    {
      name:"Mercedes",
      country:"Njemačka",
      address:"Stuttgart",
      establishment_date:"28.6.1926.",
      logo: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png"
    },
    {
      name:"Audi",
      country:"Njemačka",
      address:"Ingolstadt",
      establishment_date:"10.3.1969.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/400px-Audi-Logo_2016.svg.png"
    },
    {
      name:"Alfa Romeo",
      country:"Italija",
      address:"Turin, Piedmont",
      establishment_date:"24.6.1910.",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Alfa_Romeo_logo.png"
    }
  ]
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

}
