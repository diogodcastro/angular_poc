import { Component, OnInit } from '@angular/core';
import {Client} from '../../shared/models/client.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DynamicDialogConfig, DynamicDialogRef, MessageService} from 'primeng/api';
import {ClientService} from '../../shared/services/client.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  public newClient: Client;
  public clientForm: FormGroup;
  public error: any;
  public client: Client;

  constructor(
              private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService,
              private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private clientService: ClientService) {

    this.client = this.config.data;
  }

  ngOnInit() {
    this.clientForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'idNumber': new FormControl('', Validators.required)
    });

    if (this.client != null) {
      this.clientForm.get('name').setValue(this.client.name);
      this.clientForm.get('address').setValue(this.client.address);
      this.clientForm.get('idNumber').setValue(this.client.idNumber);
    }
  }

  saveClientData() {
    if (this.client != null) {
      this.client = this.clientForm.value;
      this.clientService.updateClient(this.client).subscribe((data: Client) => {
        this.messageService
          .add({severity: 'success', summary: 'Client Updated', detail: 'You have updated client - ' + data.name + '.'});
        this.ref.close(this.client);
      }, error => {
        this.error = error;
      });

    } else {
      this.newClient = this.clientForm.value;
      this.clientService.newClient(this.newClient).subscribe((data: Client) => {
        this.messageService
          .add({severity: 'success', summary: 'Client Created', detail: 'You have created client - ' + data.name + '.'});
        this.ref.close(this.newClient);
      }, error => {
        this.error = error;
      });
    }
  }

}
