import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVICE } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { HClinicaResponse } from '../model/response/entity/HClinicaResponse';

@Injectable({ providedIn: 'root' })
export class HclinicaService {
  private SERVICE_HC: string = SERVICE + '/hclinico';
  constructor(
    private http: HttpClient,
    private service: AuthenticationService
  ) {}

  public retrive(id: number): Observable<HClinicaResponse> {
    let endopint: string = this.SERVICE_HC.concat('?id=' + id);
    return this.http.get<HClinicaResponse>(
      endopint,
      this.service.setAuthentication()
    );
  }
}
