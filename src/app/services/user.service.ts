import { ResponseUserCollection } from './../model/response/collections/ResponseUserCollection';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Response } from '../model/response/MessageResponse';
import { SERVICE } from 'src/environments/environment';
import { UserRequest } from './../model/request/UserRequest';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private SERVICE_USER: string = SERVICE + '/usuarios';

  constructor(
    private http: HttpClient,
    private service: AuthenticationService
  ) {}

  private builderEndpoint(page: number): string {
    let valueEnd = `/?page=${page}&size=5`;
    return this.SERVICE_USER.concat(valueEnd);
  }

  public retrive(page: number): Observable<ResponseUserCollection> {
    return this.http.get<ResponseUserCollection>(
      this.builderEndpoint(page),
      this.service.setAuthentication()
    );
  }

  public save(request: UserRequest): Observable<Response> {
    return this.http.post<Response>(
      this.SERVICE_USER.concat('/save'),
      request,
      this.service.setAuthentication()
    );
  }
}
