import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturersRoutingModule } from './manufacturers-routing.module';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerEditComponent } from './manufacturer-edit/manufacturer-edit.component';
import { ManufacturerAddComponent } from './manufacturer-add/manufacturer-add.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { ManufacturersComponent } from './manufacturers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManufacturersComponent, ManufacturerListComponent, ManufacturerEditComponent, ManufacturerAddComponent],
  imports: [
    ThemeModule,
    CommonModule,
    ManufacturersRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    NbSelectModule,
    NgxDatatableModule,
    NbIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManufacturersModule { }
