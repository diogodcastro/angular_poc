import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../shared/models/vehicle.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../../shared/services/vehicle.service';
import {DynamicDialogConfig, DynamicDialogRef, MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent implements OnInit {

  public newVehicle: Vehicle;
  public vehicleForm: FormGroup;
  public error: any;

  public vehicle: Vehicle;

  constructor(
              private fb: FormBuilder,
              private messageService: MessageService,
              private router: Router,
              private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private vehicleService: VehicleService) {

    this.vehicle = this.config.data;
  }

  ngOnInit() {
    this.vehicleForm = this.fb.group({
      'brand': new FormControl('', Validators.required),
      'model': new FormControl('', Validators.required),
      'color': new FormControl('', Validators.required),
      'vin': new FormControl('', Validators.compose([Validators.required, Validators.minLength(17)]))
    });

    if (this.vehicle != null) {
      this.vehicleForm.get('brand').setValue(this.vehicle.brand);
      this.vehicleForm.get('model').setValue(this.vehicle.model);
      this.vehicleForm.get('color').setValue(this.vehicle.color);
      this.vehicleForm.get('vin').setValue(this.vehicle.vin);
    }
  }

  saveVehicleData() {
    if (this.vehicle != null) {
      this.vehicle = this.vehicleForm.value;
      this.vehicleService.updateVehicle(this.vehicle).subscribe((data: Vehicle) => {
        this.messageService
          .add({severity: 'success', summary: 'Vehicle Updated', detail: 'You have updated vehicle - ' + data.vin + '.'});
        this.ref.close(this.vehicle);
      }, error => {
        this.error = error;
      });

    } else {
      this.newVehicle = this.vehicleForm.value;
      this.vehicleService.newVehicle(this.newVehicle).subscribe((data: Vehicle) => {
        this.messageService
          .add({severity: 'success', summary: 'Vehicle Created', detail: 'You have created vehicle - ' + data.vin + '.'});
        this.ref.close(this.newVehicle);
      }, error => {
        this.error = error;
      });
    }
  }

}
