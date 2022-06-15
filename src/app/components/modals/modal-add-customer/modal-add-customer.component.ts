import { Component, OnInit } from '@angular/core';

import { Response } from 'src/app/model/response/MessageResponse';
import { CustomerService } from 'src/app/services/customer.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { CustomerRequest } from 'src/app/model/request/CustomerRequest';

@Component({
  selector: 'app-modal-add-customer',
  templateUrl: './modal-add-customer.component.html',
})
export class ModalAddCustomerComponent implements OnInit {
  public request: CustomerRequest = {};

  constructor(
    private service: CustomerService,
    private showToast: ShowAlertService
  ) {}

  ngOnInit(): void {}

  saveCustomer(): void {
    this.service.save(this.request).subscribe(
      (response: Response) => this.showToast.showToast(response.message, true),
      (error: any) => this.showToast.showToast(error.error.message, false)
    );
  }
}
