import { Component, OnInit } from '@angular/core';

import { ShowAlertService } from 'src/app/services/show-alert.service';
import { MyDataResponse } from 'src/app/model/response/auth/MyDataResponse';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent implements OnInit {
  public data: MyDataResponse = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
  };

  ngOnInit() {
    this.setValue();
  }

  constructor(
    private auth: AuthenticationService,
    private showToast: ShowAlertService
  ) {}

  setValue(): void {
    this.auth.myPersonalData().subscribe(
      (data) => {
        this.data = data;
      },
      (error: any) => this.showToast.showToast(error.error.message, false)
    );
  }
}
