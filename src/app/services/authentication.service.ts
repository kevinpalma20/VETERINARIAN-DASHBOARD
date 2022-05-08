import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { SERVICE } from 'src/environments/environment';

import { SingInRequest } from '../model/request/SingInRequest';
import { SingInResponse } from '../model/response/SingInResponse';
import { VerifyResponse } from '../model/response/VerifyTokenResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public admin: boolean = false;
  public mod: boolean = false;

  private SERVICE_AUTH: string = SERVICE + '/auth';

  constructor(private http: HttpClient, private router: Router) {}

  setAuthentication(): object {
    const token = localStorage.getItem('token') || '';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return httpOptions;
  }

  verify(): Observable<boolean> {
    return this.http
      .post<VerifyResponse>(
        this.SERVICE_AUTH.concat('/verify'),
        null,
        this.setAuthentication()
      )
      .pipe(
        tap((res: VerifyResponse) => {
          this.mod = res.mod;
          this.admin = res.admin;

          localStorage.setItem('token', res.token);
        }),
        map((res: VerifyResponse) => true),
        catchError((e) => of(false))
      );
  }

  singIn(model: SingInRequest): Observable<SingInResponse> {
    return this.http
      .post<SingInResponse>(this.SERVICE_AUTH.concat('/singIn'), model)
      .pipe(tap((res: SingInResponse) => this.setLocalStorage(res)));
  }

  //Utils sessions
  setLocalStorage(response: SingInResponse): void {
    localStorage.setItem('routes', JSON.stringify(response.routes));
    localStorage.setItem('token', response.token);
  }

  logOut(): void {
    localStorage.removeItem('routes');
    localStorage.removeItem('token');

    this.router.navigateByUrl('/login');
  }
}
