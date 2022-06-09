import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-update-file',
  templateUrl: './modal-update-file.component.html',
})
export class ModalUpdateFileComponent implements OnInit {
  @Input('id') id: number = 0;
  @Input('image') image: any = '';

  public imageUp: File = new File([''], '', { type: 'text/plain' });
  public imageTemp: any = null;

  ngOnInit(): void {}

  setImage(): void {}

  chargeImage(event: Event) {
    const file: any = (event.target as HTMLInputElement)?.files?.[0];
    this.imageUp = file;

    if (!file) {
      return (this.imageTemp = null);
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.image = reader.result;
    };
  }
}
