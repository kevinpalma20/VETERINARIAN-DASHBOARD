import { Component } from '@angular/core';

import { PetService } from 'src/app/services/pet.service';
import { Response } from 'src/app/model/response/Response';
import { RaceService } from 'src/app/services/race.service';
import { PetRequest } from 'src/app/model/request/PetRequest';
import { RaceResponse } from 'src/app/model/response/entity/RaceResponse';
import { ResponseRacesCollection } from 'src/app/model/response/ResponseRacesCollection';
import { ShowAlertService } from 'src/app/services/show-alert.service';

@Component({
  selector: 'app-modal-pet',
  templateUrl: './modal-pet.component.html',
})
export class ModalPetComponent {
  public petRequest: PetRequest = {
    mascota: '',
    nacimiento: '',
    sexo: 'H',
    raza: 0,
  };

  public arrayRaces: RaceResponse[] = [];

  constructor(
    private petService: PetService,
    private raceService: RaceService,
    private toastService: ShowAlertService
  ) {
    this.chargueRaces();
  }

  chargueRaces() {
    this.raceService
      .retrive(0)
      .subscribe(
        (response: ResponseRacesCollection) =>
          (this.arrayRaces = response.collection)
      ),
      (err: any) => console.error(err);
  }

  public saveChange(): void {
    this.petService.save(this.petRequest).subscribe(
      (res: Response) => this.toastService.showToast(res.message, true),
      (error: any) => this.toastService.showToast(error.error.message, false)
    );
  }
}
