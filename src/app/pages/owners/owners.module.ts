import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { OwnersComponent } from './owners.component';
import { FilePickerModule } from  'ngx-awesome-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OwnersComponent, OwnerListComponent, OwnerEditComponent, OwnerAddComponent],
  imports: [
    ThemeModule,
    CommonModule,
    OwnersRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    FilePickerModule,
    NbSelectModule,
    NgxDatatableModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
