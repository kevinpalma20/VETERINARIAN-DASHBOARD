import { HClinicaResponse } from './../../../model/response/entity/HClinicaResponse';
import { Component, OnInit } from '@angular/core';
import { PetResponse } from 'src/app/model/response/entity/PetResponse';
import { HclinicaService } from 'src/app/services/hclinica.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-hclinica',
  templateUrl: './hclinica.component.html',
})
export class HclinicaComponent implements OnInit {
  public pets: PetResponse[] = [];
  public hc: HClinicaResponse = {};

  constructor(
    private service: HclinicaService,
    private servicePet: PetService
  ) {}

  ngOnInit(): void {
    this.servicePet.retriveAll().subscribe(
      (response) => (this.pets = response.collection),
      (error) => console.error(error)
    );
  }

  selectEvent(pet: PetResponse) {
    this.hc = {};
    this.service.retrive(pet.idMascota).subscribe(
      (res) => (this.hc = res),
      (err) => console.log(err)
    );
  }
}
