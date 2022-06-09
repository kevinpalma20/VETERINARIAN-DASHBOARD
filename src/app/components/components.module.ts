import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DonutComponent } from './donut/donut.component';
import { BoosterComponent } from './booster/booster.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ModalPetComponent } from './modal-pet/modal-pet.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ModalUpdateFileComponent } from './modal-update-file/modal-update-file.component';
import { ButtonModalCloseComponent } from './button-modal-close/button-modal-close.component';
import { ModalActionButtonsComponent } from './modal-action-buttons/modal-action-buttons.component';

@NgModule({
  declarations: [
    BoosterComponent,
    DonutComponent,
    LoadingComponent,
    SearchInputComponent,
    ModalPetComponent,
    AlertMessageComponent,
    ModalUpdateFileComponent,
    ButtonModalCloseComponent,
    ModalActionButtonsComponent,
  ],
  exports: [
    BoosterComponent,
    DonutComponent,
    LoadingComponent,
    SearchInputComponent,
    ModalPetComponent,
    AlertMessageComponent,
    ModalUpdateFileComponent,
    ButtonModalCloseComponent,
    ModalActionButtonsComponent,
  ],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
