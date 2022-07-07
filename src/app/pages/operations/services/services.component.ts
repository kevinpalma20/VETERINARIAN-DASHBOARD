import { ServiceRequest } from './../../../model/request/ServiceRequest';
import { ShowAlertService } from './../../../services/show-alert.service';
import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../../../services/service.service';
import { ServiceResponse } from './../../../model/response/entity/ServiceResponse';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
  public loading: boolean = true;

  public request: ServiceRequest = { costo: 0.0, nombre: '', descripcion: '' };

  /** Pages */
  public to: number = 0;
  /** Pages */

  /** Response collection by pets */
  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: ServiceResponse[] = [];
  /** Response collection by pets */

  constructor(
    private serviceService: ServiceService,
    public showToast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargue(this.to);
  }

  save(): void {
    this.serviceService.save(this.request).subscribe(
      (response) => this.showToast.showToast(response.message, true),
      (error: any) => this.showToast.showToast(error.error.message, false)
    );

    this.chargue(0);
  }

  chargue(pages: number) {
    this.loading = true;
    this.serviceService.retrieve(pages).subscribe(
      (response) => {
        this.totalCollection = response.total;
        this.pagesTotal = response.pages;
        this.array = response.collection;

        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.showToast.showToast(error.error.message, false);
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
    this.chargue(this.to);
  }
}
