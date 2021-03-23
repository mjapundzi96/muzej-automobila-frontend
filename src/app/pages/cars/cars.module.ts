import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarAddComponent } from './car-add/car-add.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { CarsComponent } from './cars.component';
import { FilePickerModule } from  'ngx-awesome-uploader';



@NgModule({
  declarations: [CarsComponent, CarListComponent, CarEditComponent, CarAddComponent],
  imports: [
    ThemeModule,
    CommonModule,
    CarsRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    FilePickerModule,
    NbSelectModule,
    NgxDatatableModule,
    NbIconModule
  ]
})
export class CarsModule { }
