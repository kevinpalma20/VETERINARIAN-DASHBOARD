import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { SERVICE } from 'src/environments/environment';
import { SingInRequest } from '../model/request/SingInRequest';
import { MyDataResponse } from '../model/response/auth/MyDataResponse';
import { SingInResponse } from '../model/response/auth/SingInResponse';
import { VerifyResponse } from '../model/response/auth/VerifyTokenResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public admin: boolean = false;
  public mod: boolean = false;

  private SERVICE_AUTH: string = SERVICE + '/auth';
  private MY_DATA: string = SERVICE + '/my-personal-data/';

  constructor(private http: HttpClient, private router: Router) {}

  public setAuthentication(): object {
    const token = localStorage.getItem('token') || '';
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return httpOptions;
  }
  public myPersonalData(): Observable<MyDataResponse> {
    return this.http.get<MyDataResponse>(
      this.MY_DATA,
      this.setAuthentication()
    );
  }

  public verify(): Observable<boolean> {
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

  public singIn(model: SingInRequest): Observable<SingInResponse> {
    return this.http
      .post<SingInResponse>(this.SERVICE_AUTH.concat('/singIn'), model)
      .pipe(tap((res: SingInResponse) => this.setLocalStorage(res)));
  }

  public logOut(): void {
    localStorage.removeItem('routes');
    localStorage.removeItem('token');

    this.router.navigateByUrl('/login');
  }

  private setLocalStorage(response: SingInResponse): void {
    localStorage.setItem('routes', JSON.stringify(response.routes));
    localStorage.setItem('token', response.token);
  }
}
