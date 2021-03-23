import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { NbAuthBlockComponent, NbAuthComponent, NbAuthModule } from '@nebular/auth';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    ThemeModule,
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    NbAuthModule,
    NbLayoutModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
