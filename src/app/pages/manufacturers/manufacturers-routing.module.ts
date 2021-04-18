import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturerAddComponent } from './manufacturer-add/manufacturer-add.component';
import { ManufacturerEditComponent } from './manufacturer-edit/manufacturer-edit.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturersComponent } from './manufacturers.component';

const routes: Routes = [{
  path: '',
  component: ManufacturersComponent,
  children: [
    {
      path: ':id/edit',
      component: ManufacturerEditComponent,
    },
    {
      path: 'add',
      component: ManufacturerAddComponent
    },
    {
      path:'list',
      component: ManufacturerListComponent
    }
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturersRoutingModule { }
