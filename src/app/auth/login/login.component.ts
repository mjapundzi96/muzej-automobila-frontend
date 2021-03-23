import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public errorMsg: string = '';

  private dataToSend = {
      email: '',
      password: '',
      client_id: null,
  };

  private clientBody = {
      platform_type: 1,
      application_code: 'web_app',
      device_name: '',
  };

  constructor(
      private formBuilder: FormBuilder,
      /* private usersService: UsersService,
      private alertService: AlertService, */
      private router: Router,
      /* private translate: TranslateService */
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          'username': ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5)])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      });
      this.loginForm.reset();

      this.username = this.loginForm.controls['username'];
      this.password = this.loginForm.controls['password'];
  }

  public onSubmit(): void {
      if (this.loginForm.valid) {
          this.dataToSend.email = this.loginForm.value.username;
          this.dataToSend.password = this.loginForm.value.password;
          /* this.usersService.login(this.dataToSend).subscribe(
              response => {
                  if (response.user) this.router.navigate(['/pages/dashboard']);
              },
          ); */
      }
  }
  onForgotPassword() {
      this.router.navigate(['/auth/forgot-password']);
  }


}
