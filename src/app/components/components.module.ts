import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DonutComponent } from './donut/donut.component';
import { BoosterComponent } from './booster/booster.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ModalPetComponent } from './modals/modal-pet/modal-pet.component';
import { ModalUpdateFileComponent } from './modals/modal-update-file/modal-update-file.component';
import { ButtonModalCloseComponent } from './modals/button-modal-close/button-modal-close.component';
import { ModalActionButtonsComponent } from './modals/modal-action-buttons/modal-action-buttons.component';
import { ModalAddCustomerComponent } from './modals/modal-add-customer/modal-add-customer.component';
import { HeaderModalComponent } from './modals/header-modal/header-modal.component';
import { ModalCustomerSelectTableComponent } from './modals/modal-customer-select-table/modal-customer-select-table.component';
import { ControlFormLabelComponent } from './control-form-label/control-form-label.component';
import { PickerColorItemComponent } from './picker-color-item/picker-color-item.component';

@NgModule({
  declarations: [
    BoosterComponent,
    DonutComponent,
    LoadingComponent,
    SearchInputComponent,
    ModalPetComponent,
    ModalUpdateFileComponent,
    ButtonModalCloseComponent,
    ModalActionButtonsComponent,
    ModalAddCustomerComponent,
    HeaderModalComponent,
    ModalCustomerSelectTableComponent,
    ControlFormLabelComponent,
    PickerColorItemComponent,
  ],
  exports: [
    BoosterComponent,
    DonutComponent,
    LoadingComponent,
    SearchInputComponent,
    ModalPetComponent,
    ModalUpdateFileComponent,
    ButtonModalCloseComponent,
    ModalActionButtonsComponent,
    ModalAddCustomerComponent,
    ModalCustomerSelectTableComponent,
    ControlFormLabelComponent,
    PickerColorItemComponent,
  ],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
