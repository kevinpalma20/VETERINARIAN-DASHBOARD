import { ShowAlertService } from './../../../services/show-alert.service';
import { AppointmentService } from './../../../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { CitaResponse } from 'src/app/model/response/entity/CitaResponse';
import { ServiceResponse } from 'src/app/model/response/entity/ServiceResponse';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent implements OnInit {
  public id: number = 0;

  public arrayServices: ServiceResponse[] = [];

  public loading: boolean = true;

  /** Pages */
  public to: number = 0;
  /** Pages */

  /** Response collection by pets */
  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: CitaResponse[] = [];
  /** Response collection by pets */

  constructor(
    private appointmentService: AppointmentService,
    public showToast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargue(0, true);
  }

  chargue(pages: number, replace: boolean): void {
    this.loading = true;

    this.appointmentService.retrive(pages).subscribe(
      (response) => {
        this.totalCollection = response.total;
        this.pagesTotal = response.pages;

        if (!replace) {
          response.collection.forEach((item) => this.array.push(item));
        } else {
          this.to = 0;
          this.array = response.collection;
        }

        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.showToast.showToast(error.error.message, false);
      }
    );
  }

  chargueAll() {
    this.chargue(0, true);
  }

  setId(id: number) {
    this.id = id;
    this.appointmentService
      .retrieveForId(id)
      .subscribe((collection) => (this.arrayServices = collection));
  }

  changuePage(): void {
    this.to++;
    if (this.to < this.pagesTotal) this.chargue(this.to, false);
  }
}
