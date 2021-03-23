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
  }
  
  
];
