import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnginesRoutingModule } from './engines-routing.module';
import { EngineListComponent } from './engine-list/engine-list.component';
import { EngineEditComponent } from './engine-edit/engine-edit.component';
import { EngineAddComponent } from './engine-add/engine-add.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { EnginesComponent } from './engines.component';
import { FilePickerModule } from  'ngx-awesome-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EnginesComponent, EngineListComponent, EngineEditComponent, EngineAddComponent],
  imports: [
    ThemeModule,
    CommonModule,
    EnginesRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    FilePickerModule,
    NbSelectModule,
    NgxDatatableModule,
    NbIconModule,
    NbAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EnginesModule { }
