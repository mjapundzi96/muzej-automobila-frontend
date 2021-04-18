import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Engine, EnginesAllBody } from '../../../@core/models/engine.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListPage } from '../../../@core/models/api.model';
import { ApiService } from '../../../services/api.service';
import { SimpleModalService } from "ngx-simple-modal"
import { NbToastrService } from '@nebular/theme';
import { PageInfo, SortInfo } from '../../../@core/models/datatable.model';
import { ModalConfirmComponent } from '../../../@theme/components/modal-confirm/modal-confirm.component';


@Component({
  selector: 'ngx-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.scss']
})
export class EngineListComponent implements OnInit {
  filterForm: FormGroup;

  breadcrumbs: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: '/pages/home',
    },
    {
      title: 'Motori',
      path: '/pages/engines'
    },
    {
      title: 'Popis motora',

    }
  ]
  rows = []
  filterBody: EnginesAllBody = {
    command: {
      
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
    this.apiService.fetchAllEngines(this.filterBody).subscribe(res => {
      const { response, page } = res;
      this.rows = response
      this.page = page
    })
  }

  onDelete(engine: Engine) {
    const {name,id} = engine;
    this.simpleModalService.addModal(ModalConfirmComponent,{
      title:'Brisanje motora',
      message:`Jeste li sigurni da želite obrisati motor ${name}?`,
      button:'Potvrdi'
    }).subscribe((isConfirmed)=>{
      if (isConfirmed){
        this.apiService.deleteEngine(id).subscribe(()=>{
          this.toastrService.success('Motor uspješno obrisan!','Success')
          this.onDisplayPage()
        })
      }
    })
  }
}
