import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './dashboard-plane/progress/progress.component';
import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';

import { PetComponent } from './mantiniences/pet/pet.component';
import { UserComponent } from './mantiniences/user/user.component';

import { RoleGuard } from '../guards/role.guard';
import { RaceComponent } from './mantiniences/race/race.component';
import { CustomerComponent } from './mantiniences/customer/customer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/mascotas', pathMatch: 'full' },
      { path: 'my-profile', component: MyProfileComponent },
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

      { path: 'razas', component: RaceComponent },
      { path: 'mascotas', component: PetComponent },
      { path: 'clientes', component: CustomerComponent },
      { path: 'usuarios', canActivate: [RoleGuard], component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
