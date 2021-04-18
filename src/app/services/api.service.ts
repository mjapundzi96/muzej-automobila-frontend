import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BASE_URL } from '../../environments/environment';
import { NbToastrService } from '@nebular/theme';
import { LoginBody, LoginResult } from '../@core/models/login.model';
import { Manufacturer, ManufacturerSingleResult, ManufacturersAllBody, ManufacturersAllResult } from '../@core/models/manufacturer.model';
import { UserBody, UsersAllBody, UsersAllResult, UserSingleResult } from '../@core/models/user.model';
import { EngineBody, EngineSingleResult, EnginesAllBody, EnginesAllResult } from '../@core/models/engine.model';
import { OwnerBody, OwnersAllResult, OwnerSingleResult } from '../@core/models/owner.model';
import { CarBody, CarsAllBody, CarSingleResult } from '../@core/models/car.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
    private toastrService: NbToastrService
  ) { }

  // login

  login(body: LoginBody) {
    return this.http.post(`${BASE_URL}auth/login/`, body)
      .pipe(
        map((result: LoginResult) => {
          const { response, error } = result;
          if (error) {
            this.toastrService.danger('Invalid credentials', 'Error')
            throw error.message
          }
          const { firstName, userRole } = response.user
          localStorage.setItem("username", firstName)
          localStorage.setItem("role", userRole)
          return result;
        })
      )
  }

  // employee/user

  createEmployee(body: UserBody) {
    return this.http.post(`${BASE_URL}user/save/`, body)
      .pipe(
        map((result: UserSingleResult) => {
          return result;
        })
      )
  }

  fetchAllEmployees(body: UsersAllBody) {
 /*    let bodyTemp = body
    bodyTemp.command.userRole = 2 as any */
    return this.http.post(`${BASE_URL}user/filterAll/`, body)
      .pipe(
        map((result: UsersAllResult) => {
          return result;
        })
      )
  }

  fetchSingleEmployee(id: number) {
    return this.http.put(`${BASE_URL}user/filter/`, {
      id
    })
      .pipe(
        map((result: UserSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  deleteEmployee(id: number) {
    return this.http.put(`${BASE_URL}user/delete/`, {
      id
    })
      .pipe(
        map((result: UserSingleResult) => {
          if (result.error) {
            console.log(result)
            this.toastrService.danger('Invalid request', 'Error')
            return
          }
          return result;
        }),
        catchError((error)=>{
          this.toastrService.danger('Invalid request', 'Error')
          return error
        })
      )
  }

  // owner

  createOwner(body: OwnerBody) {
    return this.http.post(`${BASE_URL}owner/save/`, body)
      .pipe(
        map((result: UserSingleResult) => {
          return result;
        })
      )
  }

  fetchAllOwners(body: UsersAllBody) {
    return this.http.post(`${BASE_URL}owner/filterAll/`, body)
      .pipe(
        map((result: OwnersAllResult) => {
          return result;
        })
      )
  }

  fetchSingleOwner(id: number) {
    return this.http.put(`${BASE_URL}owner/filter/`, {
      id
    })
      .pipe(
        map((result: OwnerSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  deleteOwner(id: number) {
    return this.http.put(`${BASE_URL}owner/delete/`, {
      id
    })
      .pipe(
        map((result: OwnerSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            return
          }
          return result;
        }),
        catchError((error)=>{
          this.toastrService.danger('Invalid request', 'Error')
          return error
        })
      )
  }

  // manufacturer

  createOrEditManufacturer(body: Manufacturer) {
    return this.http.post(`${BASE_URL}maker/save/`, body)
      .pipe(
        map((result: ManufacturerSingleResult) => {
         
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  fetchAllManufacturers(body: ManufacturersAllBody) {
    return this.http.put(`${BASE_URL}maker/filterAll/`, body)
      .pipe(
        map((result: ManufacturersAllResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  fetchSingleManufacturer(id: number) {
    return this.http.put(`${BASE_URL}maker/filter/`, {
      id
    })
      .pipe(
        map((result: ManufacturerSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  deleteManufacturer(id: number) {
    return this.http.put(`${BASE_URL}maker/delete/`, {
      id
    })
      .pipe(
        map((result: ManufacturerSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  // engine

  createOrEditEngine(body: EngineBody) {
    return this.http.post(`${BASE_URL}motor/save/`, body)
      .pipe(
        map((result: EngineSingleResult) => {
         
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  fetchAllEngines(body: EnginesAllBody) {
    return this.http.put(`${BASE_URL}motor/filterAll/`, body)
      .pipe(
        map((result: EnginesAllResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  fetchSingleEngine(id: number) {
    return this.http.put(`${BASE_URL}motor/filter/`, {
      id
    })
      .pipe(
        map((result: EngineSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  deleteEngine(id: number) {
    return this.http.put(`${BASE_URL}engine/delete/`, {
      id
    })
      .pipe(
        map((result: EngineSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  // car

  createOrEditCar(body: CarBody) {
    return this.http.post(`${BASE_URL}car/save/`, body)
      .pipe(
        map((result: CarSingleResult) => {
         
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  fetchAllCars(body: CarsAllBody) {
    return this.http.put(`${BASE_URL}car/filterAll/`, body)
      .pipe(
        map((result: EnginesAllResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  fetchSingleCar(id: number) {
    return this.http.put(`${BASE_URL}car/filter/`, {
      id
    })
      .pipe(
        map((result: CarSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }

  deleteCar(id: number) {
    return this.http.put(`${BASE_URL}car/delete/`, {
      id
    })
      .pipe(
        map((result: CarSingleResult) => {
          if (result.error) {
            this.toastrService.danger('Invalid request', 'Error')
            throw result.error.message
          }
          return result;
        })
      )
  }
}
