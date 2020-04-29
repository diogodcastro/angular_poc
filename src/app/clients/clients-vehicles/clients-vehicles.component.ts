import { Component, OnInit } from '@angular/core';
import {Client} from '../../shared/models/client.model';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {DynamicDialogConfig, DynamicDialogRef, MessageService} from 'primeng/api';
import {VehicleService} from '../../shared/services/vehicle.service';
import {Vehicle} from '../../shared/models/vehicle.model';
import {ClientService} from '../../shared/services/client.service';
import {VehiclesComponent} from '../../vehicles/vehicles-list/vehicles.component';

@Component({
  selector: 'app-clients-vehicles',
  templateUrl: './clients-vehicles.component.html',
  styleUrls: ['./clients-vehicles.component.css']
})
export class ClientsVehiclesComponent implements OnInit {

  public client: Client;
  public error: any;
  public vehicles: Vehicle[];
  public selectedVehicle: Vehicle;
  constructor(
              private vehicleService: VehicleService,
              private clientService: ClientService,
              private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService,
              private ref: DynamicDialogRef,
              private config: DynamicDialogConfig) {
    this.client = this.config.data;
  }

  ngOnInit() {
    this.getAvailableVehicles();
  }

  getAvailableVehicles() {
    this.vehicleService.getVehicles().subscribe((data: Vehicle []) => {
      this.vehicles = data;
    });
  }

  saveClientData(vehicle: Vehicle) {
    if (vehicle != null) {
    this.client.vehicleList.push(vehicle);
    this.clientService.updateClient(this.client).subscribe((data: Client) => {
      this.messageService
        .add({severity: 'success', summary: 'Client Updated', detail: 'You have updated client - ' + data.name + '.'});
      this.ref.close(this.client);
    }, error => {
      this.error = error;
    });
    } else {
    }
  }
}
