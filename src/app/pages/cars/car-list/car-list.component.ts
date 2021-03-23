import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
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
      title: 'Popis automobila',

    }
  ]
  data = [
    {
      modelName: "A8",
      color: "Plava",
      manufactureDate: "1.1.2007.",
      manufacturer: "Audi",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_Audi_A8_50_TDi_Quattro_Automatic_3.0.jpg/2560px-2018_Audi_A8_50_TDi_Quattro_Automatic_3.0.jpg",
      owner: "Motka Tvrdić"
    },
    {
      modelName: "S klasa",
      color: "Metalik",
      manufactureDate: "1.1.2010.",
      manufacturer: "Mercedes",
      image: "https://automania.hr/wp-content/uploads/2017/04/1__clanak-prva-37-730x411.jpg",
      owner: "Jurica Spindl"
    },
    {
      modelName: "Golf 1",
      color: "Oker žuta",
      manufactureDate: "1.1.1976.",
      manufacturer: "Volkswagen",
      image: "https://www.index.hr/oglasi/UserDocsImages/oglas/_2021/3/22/2827325/received137215724967927-220320210751224059.jpeg?preset=oglas-slike-view-detaljnoGalOpen2",
      owner: "Živojin mirić"
    }
  ]
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

}
