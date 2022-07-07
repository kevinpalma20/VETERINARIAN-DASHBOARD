import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { ResponseCustomerCollection } from '../model/response/collections/ResponseCustomerCollection';
import { Response } from '../model/response/MessageResponse';
import { CustomerRequest } from '../model/request/CustomerRequest';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private SERVICE_CUSTOMER: string = SERVICE + '/clientes';

  constructor(
    private http: HttpClient,
    private service: AuthenticationService
  ) {}

  private builderEndpoint(active: boolean, page: number): string {
    let value = active ? 'findActive' : '';
    let valueEnd = `/${value}?page=${page}&size=5`;
    return this.SERVICE_CUSTOMER.concat(valueEnd);
  }

  public retriveActive(page: number): Observable<ResponseCustomerCollection> {
    return this.http.get<ResponseCustomerCollection>(
      this.builderEndpoint(true, page),
      this.service.setAuthentication()
    );
  }

  public retrive(page: number): Observable<ResponseCustomerCollection> {
    return this.http.get<ResponseCustomerCollection>(
      this.builderEndpoint(false, page),
      this.service.setAuthentication()
    );
  }

  public save(request: CustomerRequest): Observable<Response> {
    return this.http.post<Response>(
      this.SERVICE_CUSTOMER.concat('/save'),
      request,
      this.service.setAuthentication()
    );
  }
}
