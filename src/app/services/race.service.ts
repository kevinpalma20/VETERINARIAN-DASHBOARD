import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment';
import { RaceRequest } from '../model/request/RaceRequest';
import { Response } from '../model/response/MessageResponse';
import { AuthenticationService } from './authentication.service';
import { ResponseRacesCollection } from '../model/response/collections/ResponseRacesCollection';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  private SERVICE_RACE: string = SERVICE + '/razas';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  retrive(page: number): Observable<ResponseRacesCollection> {
    return this.http.get<ResponseRacesCollection>(
      this.SERVICE_RACE.concat('/?page=' + page + '&size=6'),
      this.authenticationService.setAuthentication()
    );
  }

  save(request: RaceRequest): Observable<Response> {
    return this.http.post<Response>(
      this.SERVICE_RACE.concat('/save'),
      request,
      this.authenticationService.setAuthentication()
    );
  }
}
