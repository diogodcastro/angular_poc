import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from './client-list/clients.component';
import {ClientsFormComponent} from './clients-form/clients-form.component';
import {ClientsVehiclesComponent} from './clients-vehicles/clients-vehicles.component';
import {AuthGuard} from '../shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    redirectTo: 'clients'
  },
  {
    path: '',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'client-form',
    component: ClientsFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'client-vehicles',
    component: ClientsVehiclesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
