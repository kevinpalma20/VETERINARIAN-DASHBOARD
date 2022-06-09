import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowAlertService {
  public showMessageError(error: any): any {
    Swal.fire({
      title: error.error.message,
      text: error.error.error,
      icon: 'error',
    });
  }

  public showMessageSuccess(text: string): any {
    Swal.fire({ text, icon: 'success' });
  }
}
