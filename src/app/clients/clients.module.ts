import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ClientsComponent} from './client-list/clients.component';
import {ClientsRoutingModule} from './clients-routing.module';
import {ClientService} from '../shared/services/client.service';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import {ConfirmationService, DialogService, MessageService} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import { ClientsVehiclesComponent } from './clients-vehicles/clients-vehicles.component';
import {VehicleService} from '../shared/services/vehicle.service';
import {AuthGuard} from '../shared/auth/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ],
  declarations: [ClientsComponent, ClientsFormComponent, ClientsVehiclesComponent],
  providers: [ClientService, VehicleService, ConfirmationService, MessageService, DialogService, TranslateService, AuthGuard],
  exports: []
})
export class ClientsModule {}
