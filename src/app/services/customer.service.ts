import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { ResponseCustomerCollection } from '../model/response/ResponseCustomerCollection';
import { Response } from '../model/response/Response';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private SERVICE_CUSTOMER: string = SERVICE + '/clientes';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  private builderEndpoint(active: boolean, page: number): string {
    let value = active ? 'findActive' : '';
    let valueEnd = `/${value}?page=${page}&size=5`;
    return this.SERVICE_CUSTOMER.concat(valueEnd);
  }

  public retriveActive(page: number): Observable<ResponseCustomerCollection> {
    return this.http.get<ResponseCustomerCollection>(
      this.builderEndpoint(true, page),
      this.authenticationService.setAuthentication()
    );
  }

  public retrive(page: number): Observable<ResponseCustomerCollection> {
    return this.http.get<ResponseCustomerCollection>(
      this.builderEndpoint(false, page),
      this.authenticationService.setAuthentication()
    );
  }
}
