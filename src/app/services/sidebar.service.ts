import { Injectable } from '@angular/core';

import { Menu } from '../model/response/routes/MenuReponse';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: Menu[] = [];

  constructor() {}

  setMenu() {
    this.menu = JSON.parse(localStorage.getItem('routes') || '') || [];
  }
}
