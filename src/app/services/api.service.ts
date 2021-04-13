import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BASE_URL } from '../../environments/environment';
import { LoginResponse } from '../@core/models/loginResponse.model';
import { LoginBody } from '../@core/models/loginBody.model';
import { ApiResponse } from '../@core/models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(
    private http: HttpClient,

  ) {

  }



  login(body: LoginBody) {
    return this.http.post(BASE_URL + 'auth/login/', body)
      .pipe(
        map((response: ApiResponse<LoginResponse>) => {
          localStorage.setItem("username", response.response.user.firstName)
          localStorage.setItem("role", response.response.user.userRole)
          return response;
        }),
        catchError((err: Response) => {
          throw err.json();
        }));
  }
}
