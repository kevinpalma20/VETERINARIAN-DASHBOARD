import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, map, catchError } from 'rxjs/operators';

import { SERVICE } from 'src/environments/environment';
import { SingInRequest } from '../model/request/SingInRequest';
import { SingInResponse } from '../model/response/SingInResponse';
import { VerifyResponse } from '../model/response/VerifyResponse';

import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  verify(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http
      .post<VerifyResponse>(SERVICE + '/auth/verify', null, httpOptions)
      .pipe(
        tap((res: VerifyResponse) => localStorage.setItem('token', res.token)),
        map((res: VerifyResponse) => true),
        catchError((e) => of(false))
      );
  }

  singIn(model: SingInRequest) {
    return this.http
      .post<SingInResponse>(SERVICE + '/auth/singIn', model)
      .pipe(
        tap((res: SingInResponse) => localStorage.setItem('token', res.token))
      );
  }
}
