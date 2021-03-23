import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
    HomeComponent,
  ],
})
export class MiscellaneousModule { }
