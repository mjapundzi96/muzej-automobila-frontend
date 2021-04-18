import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineAddComponent } from './engine-add/engine-add.component';
import { EngineEditComponent } from './engine-edit/engine-edit.component';
import { EngineListComponent } from './engine-list/engine-list.component';
import { EnginesComponent } from './engines.component';

const routes: Routes = [{
  path: '',
  component: EnginesComponent,
  children: [
    {
      path: ':id/edit',
      component: EngineEditComponent,
    },
    {
      path: 'add',
      component: EngineAddComponent
    },
    {
      path:'list',
      component: EngineListComponent
    }
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnginesRoutingModule { }
