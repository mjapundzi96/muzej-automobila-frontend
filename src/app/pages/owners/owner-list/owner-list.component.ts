import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ListPage } from '../../../@core/models/api.model';
import { Owner, OwnersAllBody } from '../../../@core/models/owner.model';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleModalService } from "ngx-simple-modal"
import { NbToastrService } from '@nebular/theme';
import { PageInfo, SortInfo } from '../../../@core/models/datatable.model';
import { ModalConfirmComponent } from '../../../@theme/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'ngx-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  filterForm: FormGroup;
  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Vlasnici',
      path: '/pages/owners'
    },
    {
      title: 'Popis vlasnika',

    }
  ]
  rows = []
  filterBody: OwnersAllBody = {
    command: {
      firstName: '',
      lastName: '',
      oib: '',
      address: '',
      dateOfBirth: '',
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
    this.apiService.fetchAllOwners(this.filterBody).subscribe(res => {
      const { response, page } = res;
      this.rows = response
      this.page = page
    })
  }

  onDelete(owner: Owner) {
    const { firstName, lastName, id } = owner;
    this.simpleModalService.addModal(ModalConfirmComponent, {
      title: 'Brisanje vlasnika',
      message: `Jeste li sigurni da želite obrisati vlasnika ${firstName} ${lastName}?`,
      button: 'Potvrdi'
    }).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.apiService.deleteOwner(id).subscribe(() => {
          this.toastrService.success('Vlasnik uspješno obrisan!', 'Success')
          this.onDisplayPage()
        })
      }
    })
  }
}
