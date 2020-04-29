import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {VehiclesComponent} from './vehicles-list/vehicles.component';
import {VehiclesRoutingModule} from './vehicles-routing.module';
import {VehicleService} from '../shared/services/vehicle.service';
import {ConfirmationService, DialogService, MessageService} from 'primeng/api';
import { VehiclesFormComponent } from './vehicles-form/vehicles-form.component';
import {AuthGuard} from '../shared/auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule
  ],
  declarations: [VehiclesComponent, VehiclesFormComponent],
  providers: [AuthGuard, VehicleService, ConfirmationService, MessageService, DialogService],
  exports: []
})
export class VehiclesModule {}
