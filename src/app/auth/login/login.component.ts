import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { SingInRequest } from 'src/app/model/request/SingInRequest';
import { SingInResponse } from 'src/app/model/response/SingInResponse';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public request: SingInRequest = {};
  public response: SingInResponse = { token: '' };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  login() {
    this.request.email = 'umb.kevsidorov@gmail.com';
    this.request.password = 'hola123456';

    this.authenticationService.singIn(this.request).subscribe(
      (resp: SingInResponse) => this.router.navigateByUrl('/'),
      (err: any) =>
        Swal.fire({
          title: err.error.message,
          text: err.error.error,
          icon: 'warning',
        })
    );
  }
}
