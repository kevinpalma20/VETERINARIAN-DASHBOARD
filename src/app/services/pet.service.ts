import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SERVICE } from 'src/environments/environment';

import { Response } from '../model/response/Response';
import { PetRequest } from '../model/request/PetRequest';
import { ResponseCollection } from '../model/response/ResponseCollection';
import { AuthenticationService } from './authentication.service';
import { ResponsePetsCollection } from '../model/response/ResponsePetsCollection';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private SERVICE_PET: string = SERVICE + '/mascotas';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  save(request: PetRequest): Observable<Response> {
    return this.http.post<Response>(
      this.SERVICE_PET.concat('/save'),
      request,
      this.authenticationService.setAuthentication()
    );
  }

  retrive(page: number): Observable<ResponsePetsCollection> {
    return this.http.get<ResponsePetsCollection>(
      this.SERVICE_PET.concat('/?page=' + page + '&size=3'),
      this.authenticationService.setAuthentication()
    );
  }
}
