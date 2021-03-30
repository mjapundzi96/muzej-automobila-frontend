import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'cars',
      loadChildren: () => import('./cars/cars.module')
        .then(m => m.CarsModule),
    },
    {
      path: 'employees',
      loadChildren: () => import('./employees/employees.module')
        .then(m => m.EmployeesModule),
    },
    {
      path: 'owners',
      loadChildren: () => import('./owners/owners.module')
        .then(m => m.OwnersModule),
    },
    {
      path: 'manufacturers',
      loadChildren: () => import('./manufacturers/manufacturers.module')
        .then(m => m.ManufacturersModule),
    },
    {
      path: 'engines',
      loadChildren: () => import('./engines/engines.module')
        .then(m => m.EnginesModule),
    },
    {
      path: '',
      redirectTo: 'miscellaneous/home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
