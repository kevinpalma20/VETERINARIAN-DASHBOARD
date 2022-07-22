import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment';
import { Response } from '../model/response/MessageResponse';
import { AuthenticationService } from './authentication.service';
import { CategoryRequest } from '../model/request/CategoryRequest';
import { ResponseCategoryCollection } from '../model/response/collections/ResponseCategoryCollection';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private SERVICE: string = SERVICE + '/category/';

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {}

  public retrive(page: number): Observable<ResponseCategoryCollection> {
    let endpoint: string = this.SERVICE + `?page=${page}&size=5`;
    const credentials: object = this.authentication.setAuthentication();
    return this.http.get<ResponseCategoryCollection>(endpoint, credentials);
  }

  public retriveAll(): Observable<ResponseCategoryCollection> {
    let endpoint: string = this.SERVICE;
    const credentials: object = this.authentication.setAuthentication();
    return this.http.get<ResponseCategoryCollection>(endpoint, credentials);
  }

  public save(request: CategoryRequest): Observable<Response> {
    let endpoint: string = this.SERVICE + `save`;
    const credentials: object = this.authentication.setAuthentication();
    return this.http.post<Response>(endpoint, request, credentials);
  }
}
