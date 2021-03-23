import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path:'home',
        component:HomeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule {
}
