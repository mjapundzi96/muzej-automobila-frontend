import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../../@theme/components/breadcrumbs/breadcrumbs.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
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
  data = [
    {
      fullname: "Josip Ivić",
      oib: "7549434590",
      address: "Ilica 88, 10000 Zagreb",
      dob: "1.8.1974.",
      employment_date: "22.12.2014",
      photo: "https://pinotmasters.sk/wp-content/uploads/2014/10/speaker-3.jpg"
    },
    {
      fullname: "Ana Martić",
      oib: "967897790",
      address: "Gajeva 5, 10000 Zagreb",
      dob: "22.8.1976.",
      employment_date: "22.7.2012",
      photo: "https://www.southernhealth.ca/assets/Join-Our-Team/_resampled/ResizedImageWzMyNyw0OTFd/employee-benefits.jpg"
    },
    {
      fullname: "Andrej Horvat",
      oib: "987995599",
      address: "Savska 129, 10000 Zagreb",
      dob: "11.10.1974.",
      employment_date: "4.8.2007",
      photo: "https://thumbs.dreamstime.com/b/headshot-portrait-smiling-millennial-male-employee-talk-video-call-web-conference-coworking-office-profile-picture-174975508.jpg"
    },
  ]
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

}
