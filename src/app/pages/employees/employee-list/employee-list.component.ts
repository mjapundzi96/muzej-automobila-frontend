import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User, UsersAllBody } from '../../../@core/models/user.model';
import { ListPage } from '../../../@core/models/api.model';
import { ApiService } from '../../../services/api.service';
import { SimpleModalService } from "ngx-simple-modal"
import { NbToastrService } from '@nebular/theme';
import { ModalConfirmComponent } from '../../../@theme/components/modal-confirm/modal-confirm.component';
import { PageInfo, SortInfo } from '../../../@core/models/datatable.model';

@Component({
  selector: 'ngx-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  filterForm: FormGroup;
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Zaposlenici',
      path: '/pages/employees'
    },
    {
      title: 'Popis zaposlenika',
    }
  ]
  rows = []
  filterBody: UsersAllBody = {
    command: {
      firstName: '',
      lastName: '',
      oib: '',
      address: '',
      dateOfBirth: '',
      dateOfEmployment: '',
      email: '',
    },
    pagination: {
      currentPage: 1,
      size: 10,
      sortProperty: 'lastName',
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
    private toastrService: NbToastrService) {
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
    this.apiService.fetchAllEmployees(this.filterBody).subscribe(res => {
      const { response, page } = res;
      this.rows = response
      this.page = page
    })
  }

  onDelete(employee: User) {
    const { firstName, lastName, id } = employee;
    this.simpleModalService.addModal(ModalConfirmComponent, {
      title: 'Brisanje zaposlenika',
      message: `Jeste li sigurni da želite obrisati zaposlenika ${firstName} ${lastName}?`,
      button: 'Potvrdi'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.apiService.deleteEmployee(id).subscribe(() => {
          this.toastrService.success('Zaposlenik uspješno obrisan!', 'Success')
          this.onDisplayPage()
        })
      }
    })
  }
}


