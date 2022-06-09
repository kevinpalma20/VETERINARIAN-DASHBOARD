import { Component, OnInit } from '@angular/core';

import { PetService } from 'src/app/services/pet.service';
import { PetResponse } from 'src/app/model/response/PetResponse';
import { RaceResponse } from 'src/app/model/response/RaceResponse';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { ResponsePetsCollection } from 'src/app/model/response/ResponsePetsCollection';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent implements OnInit {
  public image: string = '';
  public id: number = 0;

  public loading: boolean = true;

  public message: string = '';
  public showAlert: boolean = false;

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
    public showAlertService: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.charguePets(this.to);
  }

  charguePets(pages: number) {
    this.petService
      .retrive(pages)
      .subscribe((response: ResponsePetsCollection) => {
        this.totalCollection = response.total;
        this.pagesTotal = response.pages;
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
    this.charguePets(this.to);
  }

  setImageInput(id: number, value: string) {
    this.id = id;
    this.image = value;
  }
}
