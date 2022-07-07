import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Response } from 'src/app/model/response/MessageResponse';
import { UserRequest } from './../../../model/request/UserRequest';
import { ShowAlertService } from 'src/app/services/show-alert.service';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
})
export class ModalAddUserComponent {
  public request: UserRequest = {};
  constructor(
    private service: UserService,
    private showToast: ShowAlertService
  ) {}

  save(): void {
    this.service.save(this.request).subscribe(
      (response: Response) => this.showToast.showToast(response.message, true),
      (error: any) => this.showToast.showToast(error.error.message, false)
    );
  }
}
