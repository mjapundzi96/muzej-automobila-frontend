import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

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
  };


  constructor(
      private formBuilder: FormBuilder,
      private apiService: ApiService,
      private router: Router,
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          'username': ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5)])],
          'password': [''],
      });
      this.loginForm.reset();

      this.username = this.loginForm.controls['username'];
      this.password = this.loginForm.controls['password'];
  }

  public onSubmit(): void {
      if (this.loginForm.valid) {
          this.dataToSend.email = this.loginForm.value.username;
          this.dataToSend.password = this.loginForm.value.password;
          this.apiService.login(this.dataToSend).subscribe(res=>{
            this.router.navigateByUrl("/pages/home")
          })
      }
  }
  onForgotPassword() {
      this.router.navigate(['/auth/forgot-password']);
  }


}
