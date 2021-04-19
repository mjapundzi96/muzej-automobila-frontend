import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Car, CarsAllBody } from '../../../@core/models/car.model';
import { ListPage } from '../../../@core/models/api.model';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { SimpleModalService } from "ngx-simple-modal"
import { ModalConfirmComponent } from '../../../@theme/components/modal-confirm/modal-confirm.component';
import { PageInfo, SortInfo } from '../../../@core/models/datatable.model';

@Component({
  selector: 'ngx-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  filterForm: FormGroup;
  userRole = localStorage.getItem("role");
  isEmployee = ["ADMIN","EMPLOYEE"].includes(this.userRole)
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Automobili',
      path: '/pages/cars'
    },
    {
      title: 'Popis automobila',

    }
  ]

  rows = []
  filterBody: CarsAllBody = {
    command: {
      name:"",
      manufactureDate:"",
      color:""
    },
    pagination: {
      currentPage: 1,
      size: 10,
      sortProperty: 'name',
      sortDirection: 'asc',
    }
  }
  page: ListPage = {
    ...this.filterBody.pagination,
    totalElements: 0,
    totalPages: 0,
  }
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private simpleModalService: SimpleModalService,
    private toastrService: NbToastrService
  ) {

  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      ...this.filterBody.command
    })
    this.filterForm.valueChanges.subscribe(() => {
      this.filterBody.command = this.filterForm.value;
    })
    this.onDisplayPage()
  }

  setPage(pageInfo: PageInfo) {
    this.filterBody.pagination.currentPage = pageInfo.offset + 1;
    this.onDisplayPage();
  }

  onSubmitFilters() {
    this.onDisplayPage()
  }

  onClearFilters() {
    this.filterForm.reset()
    this.onDisplayPage()
  }

  onSortRows(sortInfo: SortInfo) {
    const { dir, prop } = sortInfo.sorts[0]
    this.filterBody.pagination = {
      currentPage: 1,
      size: 10,
      sortProperty: prop,
      sortDirection: dir
    }
    this.page = {
      ...this.page,
      ...this.filterBody.pagination
    }
    this.onDisplayPage();
  }

  onDisplayPage() {
    this.apiService.fetchAllCars(this.filterBody).subscribe(res => {
      const { response, page } = res;
      this.rows = response
      this.page = page
    })
  }

  onDelete(car: Car) {
    const { name, id, maker } = car;
    this.simpleModalService.addModal(ModalConfirmComponent, {
      title: 'Brisanje automobila',
      message: `Jeste li sigurni da želite obrisati automobil ${maker.name} ${name}?`,
      button: 'Potvrdi'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.apiService.deleteEngine(id).subscribe(() => {
          this.toastrService.success('Automobil uspješno obrisan!', 'Success')
          this.onDisplayPage()
        })
      }
    })
  }
}
