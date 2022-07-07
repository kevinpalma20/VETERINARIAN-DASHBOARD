import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PetComponent } from './mantiniences/pet/pet.component';
import { UserComponent } from './mantiniences/user/user.component';
import { ComponentsModule } from '../components/components.module';
import { RaceComponent } from './mantiniences/race/race.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ServicesComponent } from './operations/services/services.component';
import { CustomerComponent } from './mantiniences/customer/customer.component';
import { ProgressComponent } from './dashboard-plane/progress/progress.component';
import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { AppointmentComponent } from './operations/appointment/appointment.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';

@NgModule({
  declarations: [
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PetComponent,
    UserComponent,
    RaceComponent,
    CustomerComponent,
    MyProfileComponent,
    AppointmentComponent,
    ServicesComponent,
  ],
  exports: [ProgressComponent, Graphica1Component, PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
