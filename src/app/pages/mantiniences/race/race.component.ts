import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

import { RaceService } from 'src/app/services/race.service';
import { Response } from '../../../model/response/Response';
import { RaceRequest } from 'src/app/model/request/RaceRequest';
import { RaceResponse } from 'src/app/model/response/RaceResponse';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { ResponseRacesCollection } from 'src/app/model/response/ResponseRacesCollection';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
})
export class RaceComponent implements OnInit {
  public petRequest: RaceRequest = { name: '' };

  public loading: boolean = false;

  /** Pages */
  public to: number = 0;
  /** Pages */

  /** Response collection by pets */
  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: RaceResponse[] = [];
  /** Response collection by pets */

  constructor(
    private raceService: RaceService,
    private showAlertService: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargue(this.to);
  }

  saveRace(name: string): void {
    this.petRequest.name = name;
    this.raceService.save(this.petRequest).subscribe(
      (response: Response) => {
        this.showAlertService.showMessageSuccess(response.message);
        this.chargue(this.to);
      },
      (e) => this.showAlertService.showMessageError(e)
    );
  }

  save(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Registrar nueva raza',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Registrar',

      preConfirm: (name: string): void => this.saveRace(name),
    });
  }

  chargue(pages: number) {
    this.raceService
      .retrive(pages)
      .subscribe((response: ResponseRacesCollection) => {
        this.pagesTotal = response.pages;
        this.totalCollection = response.total;
        this.array = response.collection;
        this.loading = false;
      }),
      (err: any) => this.showAlertService.showMessageError(err);
  }

  changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) this.to = 0;
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) this.to = this.pagesTotal - 1;
    }
    this.chargue(this.to);
  }
}
