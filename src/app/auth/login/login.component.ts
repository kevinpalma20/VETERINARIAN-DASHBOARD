import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { SingInRequest } from 'src/app/model/request/SingInRequest';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public request: SingInRequest = { email: '', password: '' };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private showAlertService: ShowAlertService
  ) {}

  login() {
    //this.request.email = 'umb.kevsidorov@gmail.com';
    //this.request.password = 'hola123456';

    this.authenticationService.singIn(this.request).subscribe(
      () => this.router.navigateByUrl('/dashboard'),
      (err: any) => this.showAlertService.showMessageError(err)
    );
  }
}
