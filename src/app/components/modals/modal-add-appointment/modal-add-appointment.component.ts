import { ShowAlertService } from './../../../services/show-alert.service';
import { AppointmentService } from './../../../services/appointment.service';
import { CitaRequest } from './../../../model/request/CitaRequest';
import { CustomerResponse } from './../../../model/response/entity/CustomerResponse';
import { CustomerService } from 'src/app/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ResponseCustomerCollection } from 'src/app/model/response/collections/ResponseCustomerCollection';

@Component({
  selector: 'app-modal-add-appointment',
  templateUrl: './modal-add-appointment.component.html',
})
export class ModalAddAppointmentComponent implements OnInit {
  public request: CitaRequest = { description: '', idCustomer: 0 };
  public customer: CustomerResponse = {};
  public collection: CustomerResponse[] = [];

  constructor(
    private customerService: CustomerService,
    private appointmentService: AppointmentService,
    private showToast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.customerService
      .retriveAll()
      .subscribe(
        (response: ResponseCustomerCollection) =>
          (this.collection = response.collection)
      );
  }

  save(): void {
    this.request.idCustomer = this.customer.idCliente || 0;
    this.appointmentService.save(this.request).subscribe(
      (response) => this.showToast.showToast(response.message, true),
      (error: any) => this.showToast.showToast(error.error.message, false)
    );
  }

  selectEvent(model: CustomerResponse) {
    this.customer = model;
  }
}
