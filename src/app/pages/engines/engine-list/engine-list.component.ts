import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss']
})
export class EngineListComponent implements OnInit {
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
      title: 'Popis motora',

    }
  ]
  data = [
    {
      name: "Modular engine",
      fuel:"Benzin",
      manufacturer: "Volvo",
      horsepower: 300
    },
    {
      name: "M50",
      fuel:"Benzin",
      manufacturer: "BMW",
      horsepower: 320
    },
    {
      name: "M113/M155",
      fuel:"Dizel",
      manufacturer: "Mercedes-Benz",
      horsepower: 380
    },
  ]
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

}
