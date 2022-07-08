import { ServiceResponse } from './../model/response/entity/ServiceResponse';
import { ServiceRequest } from './../model/request/ServiceRequest';
import { ResponseServiceCollection } from './../model/response/collections/ResponseServiceCollection';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from './../../environments/environment';
import { Response } from '../model/response/MessageResponse';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  private SERVICE: string = SERVICE + '/servicios';

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {}

  public save(request: ServiceRequest): Observable<Response> {
    return this.http.post<Response>(
      this.SERVICE.concat('/save'),
      request,
      this.authentication.setAuthentication()
    );
  }

  public retrieve(page: number): Observable<ResponseServiceCollection> {
    return this.http.get<ResponseServiceCollection>(
      this.SERVICE.concat(`?page=${page}&size=5`),
      this.authentication.setAuthentication()
    );
  }

  public retrieveAll(): Observable<ResponseServiceCollection> {
    return this.http.get<ResponseServiceCollection>(
      this.SERVICE,
      this.authentication.setAuthentication()
    );
  }
}
