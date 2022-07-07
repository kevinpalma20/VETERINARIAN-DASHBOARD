import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICE } from 'src/environments/environment';

import { PetRequest } from '../model/request/PetRequest';
import { Response } from '../model/response/MessageResponse';
import { AuthenticationService } from './authentication.service';
import { ResponsePetsCollection } from '../model/response/collections/ResponsePetsCollection';
import { AddCustomerInPet } from '../model/request/AddCustomerInPetRequest';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private SERVICE_PET: string = SERVICE + '/mascotas';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  public save(request: PetRequest): Observable<Response> {
    return this.http.post<Response>(
      this.SERVICE_PET.concat('/save'),
      request,
      this.authenticationService.setAuthentication()
    );
  }

  public retrive(page: number): Observable<ResponsePetsCollection> {
    return this.http.get<ResponsePetsCollection>(
      this.SERVICE_PET.concat('/?page=' + page + '&size=2 '),
      this.authenticationService.setAuthentication()
    );
  }

  public submitPhoto(id: number, file: File): Observable<Response> {
    const body = new FormData();
    body.append('file', file);
    return this.http.post<Response>(
      this.SERVICE_PET.concat('/submitPhoto?id=' + id),
      body,
      this.authenticationService.setAuthentication()
    );
  }

  public addCustomerInPet(
    id: number,
    request: AddCustomerInPet
  ): Observable<Response> {
    const endpoint: string = this.SERVICE_PET.concat(`/addCustomer?id=${id}`);
    return this.http.put<Response>(
      endpoint,
      request,
      this.authenticationService.setAuthentication()
    );
  }
}
