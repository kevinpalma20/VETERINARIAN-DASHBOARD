import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment';
import { ProductRequest } from '../model/request/ProductRequest';
import { AuthenticationService } from './authentication.service';
import { ResponseProductCollection } from '../model/response/collections/ResponseProductCollection';
import { Response } from '../model/response/MessageResponse';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private SERVICE: string = SERVICE + '/product/';

  constructor(
    private http: HttpClient,
    private credentials: AuthenticationService
  ) {}

  public retrive(page: number): Observable<ResponseProductCollection> {
    let endpoint: string = this.SERVICE + `?page=${page}&size=5`;
    const credentials: object = this.credentials.setAuthentication();
    return this.http.get<ResponseProductCollection>(endpoint, credentials);
  }

  public retriveAll(): Observable<ResponseProductCollection> {
    let endpoint: string = this.SERVICE;
    const credentials: object = this.credentials.setAuthentication();
    return this.http.get<ResponseProductCollection>(endpoint, credentials);
  }

  public save(request: ProductRequest): Observable<Response> {
    let endpoint: string = this.SERVICE + `save`;
    const credentials: object = this.credentials.setAuthentication();
    return this.http.post<Response>(endpoint, request, credentials);
  }
}
