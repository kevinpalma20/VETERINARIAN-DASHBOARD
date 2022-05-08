import { Component, OnInit } from '@angular/core';
import { PetResponse } from 'src/app/model/response/PetResponse';

import Swal from 'sweetalert2';

import { Response } from '../../../model/response/Response';
import { PetService } from 'src/app/services/pet.service';
import { PetRequest } from 'src/app/model/request/PetRequest';
import { ResponsePetsCollection } from 'src/app/model/response/ResponsePetsCollection';
import { RaceResponse } from 'src/app/model/response/RaceResponse';
import { RaceService } from 'src/app/services/race.service';
import { ResponseRacesCollection } from 'src/app/model/response/ResponseRacesCollection';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent implements OnInit {
  public petRequest: PetRequest = { sexo: 'H' };

  public loading: boolean = true;

  /** Alert properties */
  public color: 'alert-danger' | 'alert-success' = 'alert-success';
  public message: string = '';
  public showAlert: boolean = false;
  /** Alert properties */

  /** Pages */
  public to: number = 0;
  /** Pages */

  /** Response collection by pets */
  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: PetResponse[] = [];
  /** Response collection by pets */

  public arrayRaces: RaceResponse[] = [];

  constructor(
    private petService: PetService,
    private raceService: RaceService
  ) {}

  ngOnInit(): void {
    this.chargueRaces();
    this.charguePets(this.to);
  }

  chargueRaces() {
    this.raceService
      .retrive(0)
      .subscribe(
        (response: ResponseRacesCollection) =>
          (this.arrayRaces = response.collection)
      ),
      (err: any) => console.log(err);
  }

  charguePets(pages: number) {
    this.petService
      .retrive(pages)
      .subscribe((response: ResponsePetsCollection) => {
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

  saveChange() {
    this.showAlert = true;

    this.petService.save(this.petRequest).subscribe(
      (res: Response) => {
        this.color = 'alert-success';
        this.message = res.message;

        this.charguePets(this.to);
      },
      (error) => {
        this.color = 'alert-danger';
        this.message = error.error.message;
      }
    );
  }

  changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) this.to = 0;
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) this.to = this.pagesTotal - 1;
    }
    this.charguePets(this.to);
  }
}
