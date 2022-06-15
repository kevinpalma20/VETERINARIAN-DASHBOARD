import { Component, OnInit } from '@angular/core';

import { CustomerService } from 'src/app/services/customer.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { CustomerResponse } from 'src/app/model/response/entity/Customer';
import { ResponseCustomerCollection } from 'src/app/model/response/collections/ResponseCustomerCollection';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  public loading: boolean = true;

  /** Pages */
  public to: number = 0;
  /** Pages */

  /** Response collection by pets */
  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: CustomerResponse[] = [];
  /** Response collection by pets */

  constructor(
    private customerService: CustomerService,
    public showAlertService: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargueCustomer(this.to);
  }

  chargueCustomer(pages: number) {
    this.loading = true;
    this.customerService.retrive(pages).subscribe(
      (response: ResponseCustomerCollection) => {
        this.totalCollection = response.total;
        this.pagesTotal = response.pages;
        this.array = response.collection;

        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.showAlertService.showToast(error.error.message, false);
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
    this.chargueCustomer(this.to);
  }
}
