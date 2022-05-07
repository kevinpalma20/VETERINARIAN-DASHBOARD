import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  public menu: any[] = [];

  constructor(
    private sidebarService: SidebarService,
    private auth: AuthenticationService
  ) {
    this.menu = this.sidebarService.menu;
    console.log(this.menu);
  }

  logOut() {
    this.auth.logOut();
  }
}
