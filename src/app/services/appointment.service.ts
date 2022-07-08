import { CitaRequest } from './../model/request/CitaRequest';
import { AddServiceInCitaRequest } from './../model/request/AddServiceInCitaRequest';
import { ServiceResponse } from './../model/response/entity/ServiceResponse';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICE } from './../../environments/environment';

import { AuthenticationService } from './authentication.service';
import { ResponseAppointmentCollection } from './../model/response/collections/ResponseAppointmentCollection';
import { Response } from '../model/response/MessageResponse';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private SERVICE_APPOINTMENT: string = SERVICE + '/citas';

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {}

  public addServiceInCitas(
    id: number,
    request: AddServiceInCitaRequest
  ): Observable<Response> {
    let valueEnd: string = this.SERVICE_APPOINTMENT + `/addServices?id=${id}`;
    return this.http.put<Response>(
      valueEnd,
      request,
      this.authentication.setAuthentication()
    );
  }

  public save(request: CitaRequest): Observable<Response> {
    let valueEnd: string = this.SERVICE_APPOINTMENT + `/save`;
    return this.http.post<Response>(
      valueEnd,
      request,
      this.authentication.setAuthentication()
    );
  }

  public retrive(page: number): Observable<ResponseAppointmentCollection> {
    let valueEnd: string = this.SERVICE_APPOINTMENT + `?page=${page}&size=5`;
    return this.http.get<ResponseAppointmentCollection>(
      valueEnd,
      this.authentication.setAuthentication()
    );
  }

  public retrieveForId(id: number): Observable<ServiceResponse[]> {
    return this.http.get<ServiceResponse[]>(
      this.SERVICE_APPOINTMENT.concat('/findServicesById?id=' + id),
      this.authentication.setAuthentication()
    );
  }
}
