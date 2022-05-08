import { Component, OnInit } from '@angular/core';

import { Response } from '../../../model/response/Response';
import { RaceRequest } from 'src/app/model/request/RaceRequest';
import { RaceResponse } from 'src/app/model/response/RaceResponse';
import { ResponseRacesCollection } from 'src/app/model/response/ResponseRacesCollection';
import { RaceService } from 'src/app/services/race.service';
import Swal from 'sweetalert2';

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

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.chargue(this.to);
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

      preConfirm: (name) => {
        this.petRequest.name = name;
        this.raceService.save(this.petRequest).subscribe(
          (res: Response) => {
            Swal.fire({
              text: res.message,
              icon: 'success',
            });

            this.chargue(this.to);
          },
          (e) =>
            Swal.fire({
              title: e.error.message,
              text: e.error.error,
              icon: 'warning',
            })
        );
      },
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
      (err: any) =>
        Swal.fire({
          title: err.error.message,
          text: err.error.error,
          icon: 'warning',
        });
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
