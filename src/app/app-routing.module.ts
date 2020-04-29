import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/auth/auth.guard';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule'
  },
  {
    path: 'vehicles',
    loadChildren: './vehicles/vehicles.module#VehiclesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
