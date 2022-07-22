import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { CategoryResponse } from 'src/app/model/response/entity/CategoryResponse';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  public loading: boolean = true;

  public to: number = 0;

  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: CategoryResponse[] = [];

  constructor(
    private service: CategoryService,
    public toast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargue(this.to);
  }

  save(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Registrar nueva categoria',
      input: 'text',
      inputAttributes: { autocapitalize: 'off' },

      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Registrar',

      preConfirm: (name: string): void => {
        this.service.save({ name }).subscribe(
          (response) => this.toast.showToast(response.message, true),
          (error: any) => this.toast.showToast(error.error.message, false)
        );
      },
    });
  }

  chargue(pages: number) {
    this.loading = true;
    this.service.retrive(pages).subscribe(
      (response) => {
        this.totalCollection = response.total;
        this.pagesTotal = response.pages;
        this.array = response.collection;

        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.toast.showToast(error.error.message, false);
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
