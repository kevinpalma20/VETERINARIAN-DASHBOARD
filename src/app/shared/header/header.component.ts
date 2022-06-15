import { Component, OnInit } from '@angular/core';

import { MyDataResponse } from 'src/app/model/response/auth/MyDataResponse';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  public data: MyDataResponse = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
  };

  constructor(
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
