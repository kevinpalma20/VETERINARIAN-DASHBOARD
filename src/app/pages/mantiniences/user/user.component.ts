import { UserResponse } from './../../../model/response/entity/UserResponse';
import { ShowAlertService } from 'src/app/services/show-alert.service';
import { ResponseUserCollection } from './../../../model/response/collections/ResponseUserCollection';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public loading: boolean = false;

  public to: number = 0;
  public pagesTotal: number = 0;
  public array: UserResponse[] = [];
  public totalCollection: number = 0;

  constructor(
    private userService: UserService,
    private showAlertService: ShowAlertService
  ) {}

  ngOnInit(): void {
    this.chargue(this.to);
  }

  changuePage(value: boolean): void {
    if (value) {
      this.to--;
      if (this.to <= 0) this.to = 0;
    } else {
      this.to++;
      if (this.to >= this.pagesTotal) {
        this.to = this.pagesTotal - 1;
      }
    }
    this.chargue(this.to);
  }

  chargue(pages: number) {
    this.loading = true;
    this.userService
      .retrive(pages)
      .subscribe((response: ResponseUserCollection) => {
        this.loading = false;
        this.pagesTotal = response.pages;
        this.array = response.collection;
        this.totalCollection = response.total;
      }),
      (err: any) => {
        this.loading = false;
        this.showAlertService.showMessageError(err);
      };
  }
}
