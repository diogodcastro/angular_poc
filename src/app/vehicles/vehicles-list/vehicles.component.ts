import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../shared/services/vehicle.service';
import {Vehicle} from '../../shared/models/vehicle.model';
import {ConfirmationService, DialogService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {VehiclesFormComponent} from '../vehicles-form/vehicles-form.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehicles: Vehicle[];

  constructor(private router: Router,
              private vehicleService: VehicleService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getVehicles();
  }

  public getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((response: [Vehicle]) => {
      this.vehicles = response;
    });
  }

  createVehicleModal() {
    const ref = this.dialogService.open(VehiclesFormComponent, {
      header: 'New Vehicle',
      width: '70%',
      contentStyle: {'max-height': '350px', 'overflow': 'auto'}
    });
    ref.onClose.subscribe((vehicle: Vehicle) => {
      if (vehicle) {
       this.getVehicles();
      }
    });
  }

  editVehicleModal(vehicle: Vehicle) {
    const ref = this.dialogService.open(VehiclesFormComponent, {
      header: 'Edit Vehicle - ' + vehicle.vin + '',
      width: '70%',
      contentStyle: {'max-height': '350px', 'overflow': 'auto'},
      data: vehicle
    });
    ref.onClose.subscribe((vehicle: Vehicle) => {
      if (vehicle) {
        this.getVehicles();
      }
    });
  }

  deleteVehicleModal(vehicle: Vehicle) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Vehicle - ' + vehicle.vin + ' ?',
      header: 'Delete vehicle Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.vehicleService.deleteVehicle(vehicle).subscribe((response: Vehicle) => {
          this.messageService.add({severity: 'success', summary: 'Vehicle Deleted', detail: 'You have deleted vehicle - ' + vehicle.vin + '.'});
          this.getVehicles();
        });
      },
      reject: () => {
      }
    });
  }

}
