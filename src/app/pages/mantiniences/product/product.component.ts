import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { ProductResponse } from 'src/app/model/response/entity/ProductResponse';
import { CategoryResponse } from 'src/app/model/response/entity/CategoryResponse';
import { ProductRequest } from 'src/app/model/request/ProductRequest';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  public request: ProductRequest = {};

  public to: number = 0;
  public loading: boolean = true;

  public pagesTotal: number = 0;
  public totalCollection: number = 0;
  public array: ProductResponse[] = [];
  public categories: CategoryResponse[] = [];

  constructor(
    private categoryService: CategoryService,
    private service: ProductService,
    public toast: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargue(this.to);

    this.categoryService
      .retriveAll()
      .subscribe((data) => (this.categories = data.collection));
  }

  save() {
    this.service.save(this.request).subscribe(
      (response) => this.toast.showToast(response.message, true),
      (error: any) => this.toast.showToast(error.error.message, false)
    );
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
