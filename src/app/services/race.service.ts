import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../model/response/MessageResponse';
import { SERVICE } from 'src/environments/environment';
import { RaceRequest } from '../model/request/RaceRequest';
import { ResponseRacesCollection } from '../model/response/collections/ResponseRacesCollection';
import { AuthenticationService } from './authentication.service';

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
