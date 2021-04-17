import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BASE_URL } from '../../environments/environment';
import { ApiResult } from '../@core/models/api.model';
import { NbToastrService } from '@nebular/theme';
import { LoginBody, LoginResponse } from '../@core/models/login.model';
import { ManufacturerBody, ManufacturerResponse } from '../@core/models/manufacturer.model';
import { UserBody } from '../@core/models/user.model';

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(
    private http: HttpClient,
    private toastrService: NbToastrService
  ) {

  }

  // login

  login(body: LoginBody) {
    return this.http.post(`${BASE_URL}auth/login/`, body)
      .pipe(
        map((_: ApiResult<LoginResponse>) => {
          if (_.error) {
            this.toastrService.danger('Invalid credentials', 'Error')
            throw _.error.message
          }
          localStorage.setItem("username", _.response.user.firstName)
          localStorage.setItem("role", _.response.user.userRole)
          return _;
        })
      )
  }

  // employee 

  createEmployee(body: any) {
    return this.http.post(`${BASE_URL}user/save/`, body)
      .pipe(
        map((response: ApiResult<boolean>) => {
          return response;
        })
      )
  }

  // manufacturer

  createManufacturer(body: ManufacturerBody) {
    return this.http.post(`${BASE_URL}maker/save/`, body)
      .pipe(
        map((response: ApiResult<boolean>) => {
          return response;
        })
      )
  }

  fetchManufacturers(){
    return this.http.put(`${BASE_URL}maker/filterAll/`,{
      command:{}
    })
      .pipe(
        map((response: ApiResult<Array<ManufacturerResponse>>) => {
          return response;
        })
      )
  }
}
