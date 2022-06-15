import { Component, OnInit } from '@angular/core';

import { SidebarService } from 'src/app/services/sidebar.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { MyDataResponse } from 'src/app/model/response/auth/MyDataResponse';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public data: MyDataResponse = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
  };

  constructor(
    public sidebarService: SidebarService,
    private auth: AuthenticationService,
    private showToast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.setValue();
  }

  logOut() {
    this.auth.logOut();
  }

  setValue(): void {
    this.auth.myPersonalData().subscribe(
      (data) => (this.data = data),
      (error: any) => this.showToast.showToast(error.error.message, false)
    );
  }
}
