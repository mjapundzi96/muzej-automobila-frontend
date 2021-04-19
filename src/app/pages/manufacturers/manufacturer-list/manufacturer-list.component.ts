import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { ApiService } from '../../../services/api.service';
import { Manufacturer, ManufacturersAllBody } from '../../../@core/models/manufacturer.model';
import { ListPage } from '../../../@core/models/api.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageInfo, SortInfo } from '../../../@core/models/datatable.model';
import { ModalConfirmComponent } from '../../../@theme/components/modal-confirm/modal-confirm.component';
import { SimpleModalService } from "ngx-simple-modal"
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.scss']
})
export class ManufacturerListComponent implements OnInit {
  userRole = localStorage.getItem("role");
  isEmployee = ["ADMIN","EMPLOYEE"].includes(this.userRole)
  filterForm: FormGroup;

  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Proizvođači',
      path: '/pages/manufacturers'
    },
    {
      title: 'Popis proizvođača',

    }
  ]
  rows = []
  filterBody: ManufacturersAllBody = {
    command: {
      name: '',
      address: '',
      dateOfCreation: '',
      country: ''
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
    private toastrService:NbToastrService
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
    this.apiService.fetchAllManufacturers(this.filterBody).subscribe(res => {
      const { response, page } = res;
      this.rows = response
      this.page = page
    })
  }

  onDelete(manufacturer: Manufacturer) {
    const {name,id} = manufacturer;
    this.simpleModalService.addModal(ModalConfirmComponent,{
      title:'Brisanje proizvođača',
      message:`Jeste li sigurni da želite obrisati proizvođača ${name}?`,
      button:'Potvrdi'
    }).subscribe((isConfirmed)=>{
      if (isConfirmed){
        this.apiService.deleteManufacturer(id).subscribe(()=>{
          this.toastrService.success('Proizvođač uspješno obrisan!','Success')
          this.onDisplayPage()
        })
      }
    })
  }
}
