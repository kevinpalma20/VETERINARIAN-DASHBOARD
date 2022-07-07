import { Component, Input, OnInit } from '@angular/core';

import { PetService } from 'src/app/services/pet.service';
import { Response } from 'src/app/model/response/MessageResponse';
import { CustomerService } from 'src/app/services/customer.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { CustomerResponse } from 'src/app/model/response/entity/CustomerResponse';
import { AddCustomerInPet } from 'src/app/model/request/AddCustomerInPetRequest';
import { ResponseCustomerCollection } from 'src/app/model/response/collections/ResponseCustomerCollection';

@Component({
  selector: 'app-modal-customer-select-table',
  templateUrl: './modal-customer-select-table.component.html',
})
export class ModalCustomerSelectTableComponent implements OnInit {
  @Input('idPet') idPet: number = 0;
  public collection: CustomerResponse[] = [];
  public request: AddCustomerInPet = { idCustomer: 0 };

  /** Pages */
  public to: number = 0;
  /** Pages */

  constructor(
    private petService: PetService,
    private customerService: CustomerService,
    public showAlertService: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.retriveCustomer(this.to);
  }

  addCustomer() {
    this.petService.addCustomerInPet(this.idPet, this.request).subscribe(
      (response: Response) =>
        this.showAlertService.showToast(response.message, true),
      (error: any) =>
        this.showAlertService.showToast(error.error.message, false)
    );
  }

  retriveCustomer(pages: number) {
    this.customerService.retriveActive(pages).subscribe(
      (response: ResponseCustomerCollection) => {
        this.collection = response.collection;
      },
      (error: any) => {
        console.log(error);
        this.showAlertService.showToast(error.error.message, false);
      }
    );
  }
}
