import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './dashboard-plane/progress/progress.component';
import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { DashboardComponent } from './dashboard-plane/dashboard/dashboard.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';

import { PetComponent } from './mantiniences/pet/pet.component';
import { UserComponent } from './mantiniences/user/user.component';

import { RoleGuard } from '../guards/role.guard';
import { RaceComponent } from './mantiniences/race/race.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'progress',
        canActivate: [RoleGuard],
        component: ProgressComponent,
      },
      {
        path: 'graphical',
        canActivate: [RoleGuard],
        component: Graphica1Component,
      },
      { path: 'settings', component: AccountSettingsComponent },

      //Mantiniences
      { path: 'mascotas', component: PetComponent },
      { path: 'razas', component: RaceComponent },
      { path: 'usuarios', canActivate: [RoleGuard], component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
