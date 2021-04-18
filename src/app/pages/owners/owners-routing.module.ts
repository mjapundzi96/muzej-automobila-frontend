import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnersComponent } from './owners.component';

const routes: Routes = [{
  path: '',
  component: OwnersComponent,
  children: [
    {
      path: ':id/edit',
      component: OwnerEditComponent,
    },
    {
      path: 'add',
      component: OwnerAddComponent
    },
    {
      path:'list',
      component: OwnerListComponent
    }
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
