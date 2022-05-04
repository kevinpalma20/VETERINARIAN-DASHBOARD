import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Menú',
          url: '/',
        },
        {
          title: 'Reportes',
          url: 'progress',
        },
        {
          title: 'Reportes',
          url: 'graphical',
        },
        {
          title: 'Configuración',
          url: 'settings',
        },
      ],
    },
  ];

  constructor() {}
}
