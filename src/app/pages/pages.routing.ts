import { HclinicaComponent } from './mantiniences/hclinica/hclinica.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from '../guards/role.guard';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { PetComponent } from './mantiniences/pet/pet.component';
import { UserComponent } from './mantiniences/user/user.component';
import { RaceComponent } from './mantiniences/race/race.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductComponent } from './mantiniences/product/product.component';
import { ServicesComponent } from './operations/services/services.component';
import { CategoryComponent } from './mantiniences/category/category.component';
import { CustomerComponent } from './mantiniences/customer/customer.component';
import { ProgressComponent } from './dashboard-plane/progress/progress.component';
import { Graphica1Component } from './dashboard-plane/graphica1/graphica1.component';
import { AppointmentComponent } from './operations/appointment/appointment.component';
import { AccountSettingsComponent } from './dashboard-plane/account-settings/account-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard/citas', pathMatch: 'full' },

      { path: 'my-profile', component: MyProfileComponent },
      { path: 'settings', component: AccountSettingsComponent },

      { path: 'razas', component: RaceComponent },
      { path: 'mascotas', component: PetComponent },
      { path: 'clientes', component: CustomerComponent },
      { path: 'citas', component: AppointmentComponent },
      { path: 'historial-clinico', component: HclinicaComponent },
      { path: 'categorias', component: CategoryComponent },
      { path: 'productos', component: ProductComponent },

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
      {
        path: 'servicios',
        canActivate: [RoleGuard],
        component: ServicesComponent,
      },
      { path: 'usuarios', canActivate: [RoleGuard], component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
