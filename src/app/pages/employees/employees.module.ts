import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgxDatatableModule } from "@swimlane/ngx-datatable"
import { EmployeesComponent } from './employees.component';
import { FilePickerModule } from  'ngx-awesome-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesComponent, EmployeeListComponent, EmployeeEditComponent, EmployeeAddComponent],
  imports: [
    ThemeModule,
    CommonModule,
    EmployeesRoutingModule,
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
export class EmployeesModule { }
