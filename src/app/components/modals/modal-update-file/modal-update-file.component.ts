import { Component, Input } from '@angular/core';
import { Response } from 'src/app/model/response/MessageResponse';
import { PetService } from 'src/app/services/pet.service';
import { ShowAlertService } from 'src/app/services/show-alert.service';

@Component({
  selector: 'app-modal-update-file',
  templateUrl: './modal-update-file.component.html',
})
export class ModalUpdateFileComponent {
  @Input('id') id: number = 0;
  @Input('image') image: any = '';

  public imageUp: File = new File([''], '', { type: 'text/plain' });
  public imageTemp: any = null;

  constructor(
    private petService: PetService,
    private toastService: ShowAlertService
  ) {}

  setImage(): void {
    this.petService.submitPhoto(this.id, this.imageUp).subscribe(
      (response: Response) =>
        this.toastService.showToast(response.message, true),
      (error: any) => this.toastService.showToast(error.error.message, false)
    );
  }

  chargeImage(event: Event) {
    const file: any = (event.target as HTMLInputElement)?.files?.[0];
    this.imageUp = file;

    if (!file) return (this.imageTemp = null);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.image = reader.result;
    };
  }
}
