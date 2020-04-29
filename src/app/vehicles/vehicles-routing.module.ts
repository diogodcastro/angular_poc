import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiclesComponent} from './vehicles-list/vehicles.component';
import {VehiclesFormComponent} from './vehicles-form/vehicles-form.component';
import {AuthGuard} from '../shared/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    redirectTo: 'vehicles'
  },
  {
    path: '',
    component: VehiclesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vehicle-form',
    component: VehiclesFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule {}
