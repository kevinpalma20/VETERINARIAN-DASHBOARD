import { Component, Input, OnInit } from '@angular/core';

import { ServiceService } from './../../../services/service.service';
import { ShowAlertService } from './../../../services/show-alert.service';
import { AppointmentService } from './../../../services/appointment.service';
import { ServiceResponse } from './../../../model/response/entity/ServiceResponse';
import { AddServiceInCitaRequest } from './../../../model/request/AddServiceInCitaRequest';

@Component({
  selector: 'app-modal-services',
  templateUrl: './modal-services.component.html',
})
export class ModalServicesComponent implements OnInit {
  @Input() id: number = 0;
  @Input() collection: ServiceResponse[] = [];

  public services: ServiceResponse[] = [];
  public servicesSelected: ServiceResponse[] = [];

  constructor(
    private serviceService: ServiceService,
    private appointmentService: AppointmentService,
    private showToast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.serviceService
      .retrieveAll()
      .subscribe((response) => (this.services = response.collection));
  }

  selectEvent(item: ServiceResponse) {
    this.servicesSelected.push(item);
  }

  remove(val: ServiceResponse) {
    this.servicesSelected = this.servicesSelected.filter((item) => item != val);
  }

  addServices() {
    const servicesId: number[] = [];
    this.servicesSelected.forEach((item) => {
      servicesId.push(item.id);
      this.collection.push(item);
    });

    const adds: AddServiceInCitaRequest = { services: servicesId };
    this.appointmentService.addServiceInCitas(this.id, adds).subscribe(
      (response) => this.showToast.showToast(response.message, true),
      (error: any) => this.showToast.showToast(error.error.message, false)
    );

    this.servicesSelected = [];
  }
}
