import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Roles } from '../@core/models/roles.enum';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  role = localStorage.getItem("role");
  menu: Array<NbMenuItem> = [

    {
      title: "Home",
      icon: 'home-outline',
      link: '/pages/home',
      home: true,
      data: 'home'
    },
    {
      title: 'O nama',
      icon: 'info-outline',
      link: '/pages/about',
      data: 'about'

    },
    {
      title: 'Kontakt',
      icon: 'message-square-outline',
      link: '/pages/contact',
      data: 'contact'
    },
    {
      title: 'Automobili',
      icon: 'car-outline',
      data: 'cars',
      children: [
        {
          title: 'Popis automobila',
          link: '/pages/cars/list',
          data: 'list'
        }, {
          title: 'Dodavanje automobila',
          link: '/pages/cars/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role)),
          data: 'add'
        }
      ],

    },
    {
      title: 'Vlasnici',
      icon: 'person',
      data: 'owners',
      children: [
        {
          title: 'Popis vlasnika',
          link: '/pages/owners/list',
          data: 'list'
        },
        {
          title: 'Dodavanje vlasnika',
          link: '/pages/owners/add',
          data: 'add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role)),
        }
      ]
    },
    {
      title: 'Proizvodači',
      icon: 'star-outline',
      data: 'manufacturers',
      children: [
        {
          title: 'Popis proizvođača',
          link: '/pages/manufacturers/list',
          data: 'add',
        },
        {
          title: 'Dodavanje proizvođača',
          link: '/pages/manufacturers/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role)),
          data: 'list'
        }
      ]
    },
    {
      title: 'Motori',
      icon: 'settings',
      data: 'engines',
      children: [
        {
          title: 'Popis motora',
          link: '/pages/engines/list',
          data: 'list'
        },
        {
          title: 'Dodavanje motora',
          link: '/pages/engines/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role)),
          data: 'add'

        }
      ]
    },
    {
      title: 'Zaposlenici',
      icon: 'people-outline',
      hidden: !([Roles.ADMIN.valueOf()].includes(this.role)),
      data: 'employees',
      children: [
        {
          title: 'Popis zaposlenika',
          link: '/pages/employees/list',
          data: 'list'
        },
        {
          title: 'Dodavanje zaposlenika',
          link: '/pages/employees/add',
          data: 'add'

        }
      ]
    },
  ];

  constructor(
    private translateService: TranslateService
  ) {

  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe(event => this.translateMenuItems());
    this.translateMenuItems();
  }

  translateMenuItems() {
    this.translateService.get('menu').subscribe(tr => {
      console.log(tr)
      this.menu.forEach(item => {
        if (item.children){
          item.title = tr[item.data]["main"]
          item.children.forEach((child)=>{
            child.title = tr[item.data][child.data]
          })
        }
        else {
          item.title = tr[item.data]
        }
        
      })
    })

  }

}
