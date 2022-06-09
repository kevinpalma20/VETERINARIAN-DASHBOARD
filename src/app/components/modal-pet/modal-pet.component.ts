import { Component } from '@angular/core';

import { PetService } from 'src/app/services/pet.service';
import { Response } from 'src/app/model/response/Response';
import { RaceService } from 'src/app/services/race.service';
import { PetRequest } from 'src/app/model/request/PetRequest';
import { RaceResponse } from 'src/app/model/response/RaceResponse';
import { ResponseRacesCollection } from 'src/app/model/response/ResponseRacesCollection';

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

  /** Alert properties */
  public message: string = '';
  public success: boolean = false;
  public showAlert: boolean = false;
  /** Alert properties */

  public arrayRaces: RaceResponse[] = [];

  constructor(
    private petService: PetService,
    private raceService: RaceService
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
    this.showAlert = true;

    this.petService.save(this.petRequest).subscribe(
      (res: Response) => {
        this.success = true;
        this.message = res.message;

        //this.charguePets(this.to);
      },
      (error: any) => {
        this.success = false;
        this.message = error.error.message;
      }
    );
  }
}
