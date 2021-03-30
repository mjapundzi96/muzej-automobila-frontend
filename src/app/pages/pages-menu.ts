import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Početna',
    icon: 'home-outline',
    link:'/pages/miscellaneous/home'
    
  },
  {
    title:'O nama',
    icon:'info-outline',
    link:'/pages/about'
  },
  {
    title:'Kontakt',
    icon:'message-square-outline',
    link:'/pages/about'
  },
  {
    title:'Automobili',
    icon:'car-outline',
    children:[
      {
        title:'Popis automobila',
        link:'/pages/cars/list'
      },
      {
        title:'Dodavanje automobila',
        link:'/pages/cars/add'
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
        link:'/pages/owners/add'
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
        link:'/pages/manufacturers/add'
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
        link:'/pages/engines/add'
      }
    ]
  },
  {
    title:'Zaposlenici',
    icon:'people-outline',
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
