import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarAddComponent } from './car-add/car-add.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { CarsComponent } from './cars.component';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { TranslatePipe } from '@ngx-translate/core';



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
    NbIconModule,
    NbAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule
  ],
  providers: [TranslatePipe]
})
export class CarsModule { }
