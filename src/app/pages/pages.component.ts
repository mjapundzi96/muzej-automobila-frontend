import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
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
export class PagesComponent {
  role = localStorage.getItem("role");
  menu: NbMenuItem[] = [
  
    {
      title: 'Početna',
      icon: 'home-outline',
      link:'/pages/home'
      
    },
    {
      title:'O nama',
      icon:'info-outline',
      link:'/pages/about'
    },
    {
      title:'Kontakt',
      icon:'message-square-outline',
      link:'/pages/about',
      
    },
    {
      title:'Automobili',
      icon:'car-outline',
      children:[
        {
          title:'Popis automobila',
          link:'/pages/cars/list'
        },{
          title:'Dodavanje automobila',
          link:'/pages/cars/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role))
        } 
      ]
    },
    {
      title:'Vlasnici',
      icon:'person',
      children:[
        {
          title:'Popis vlasnika',
          link:'/pages/owners/list'
        },
        {
          title:'Dodavanje vlasnika',
          link:'/pages/owners/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role)),
        }
      ]
    },
    {
      title:'Proizvodači',
      icon:'star-outline',
      children:[
        {
          title:'Popis proizvođača',
          link:'/pages/manufacturers/list'
        },
        {
          title:'Dodavanje proizvođača',
          link:'/pages/manufacturers/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role))
        }
      ]
    },
    {
      title:'Motori',
      icon:'settings',
      children:[
        {
          title:'Popis motora',
          link:'/pages/engines/list'
        },
        {
          title:'Dodavanje motora',
          link:'/pages/engines/add',
          hidden: !([Roles.ADMIN.valueOf(), Roles.EMPLOYEE.valueOf()].includes(this.role))
        }
      ]
    },
    {
      title:'Zaposlenici',
      icon:'people-outline',
      hidden: !([Roles.ADMIN.valueOf()].includes(this.role)),
      children:[
        {
          title:'Popis zaposlenika',
          link:'/pages/employees/list'
        },
        {
          title:'Dodavanje zaposlenika',
          link:'/pages/employees/add'
        }
      ]
    },
  ];
}
