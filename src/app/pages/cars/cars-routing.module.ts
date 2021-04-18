import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarsComponent } from './cars.component';

const routes: Routes = [{
  path: '',
  component: CarsComponent,
  children: [
    {
      path: ':id/edit',
      component: CarEditComponent,
    },
    {
      path: 'add',
      component: CarAddComponent
    },
    {
      path:'list',
      component: CarListComponent
    }
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
