import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard-plane/dashboard/dashboard.component';
import { ProgressComponent } from './dashboard-plane/progress/progress.component';
import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';
import { PetComponent } from './mantiniences/pet/pet.component';
import { UserComponent } from './mantiniences/user/user.component';
import { RaceComponent } from './mantiniences/race/race.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PetComponent,
    UserComponent,
    RaceComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
