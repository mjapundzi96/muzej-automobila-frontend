import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [{
  path: '',
  component: EmployeesComponent,
  children: [
    {
      path: ':id/edit',
      component: EmployeeEditComponent,
    },
    {
      path: 'add',
      component: EmployeeAddComponent
    },
    {
      path:'list',
      component: EmployeeListComponent
    }
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
