import { Component, OnInit } from '@angular/core';
import {Client} from '../../shared/models/client.model';
import {ClientService} from '../../shared/services/client.service';
import {ConfirmationService, DialogService, MessageService} from 'primeng/api';
import {ClientsFormComponent} from '../clients-form/clients-form.component';
import {TranslateService} from '@ngx-translate/core';
import {ClientsVehiclesComponent} from '../clients-vehicles/clients-vehicles.component';
import {Vehicle} from '../../shared/models/vehicle.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: Client[];

  private createHeader: string;
  private deleteHeader: string;
  private deleteMessage: string;

  constructor(
              private translateService: TranslateService,
              private clientService: ClientService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {

    this.getClients();
    this.getTranslations();
  }

  ngOnInit() {
  }

  public getClients() {
    this.clientService.getClients().subscribe((response: [Client]) => {
      this.clients = response;
    });
  }

  public getClientVehicleList(vehicles: Vehicle[]): string {
    let lisOfVehicles = '';
    vehicles.forEach((vehicle: Vehicle) => {
      lisOfVehicles = lisOfVehicles + ' \n' + vehicle.vin;
    });
    return lisOfVehicles;
  }

  createClientModal() {
    const ref = this.dialogService.open(ClientsFormComponent, {
      header: this.createHeader,
      width: '70%',
      contentStyle: {'max-height': '350px', 'overflow': 'auto'}
    });
    ref.onClose.subscribe((client: Client) => {
      if (client) {
        this.getClients();
      }
    });
  }

  editVehicleModal(client: Client) {
    const ref = this.dialogService.open(ClientsFormComponent, {
      header: 'Edit client - ' + client.name + '',
      width: '70%',
      contentStyle: {'max-height': '350px', 'overflow': 'auto'},
      data: client
    });
    ref.onClose.subscribe((client: Client) => {
      if (client) {
        this.getClients();
      }
    });
  }

  deleteClientModal(client: Client) {
    this.confirmationService.confirm({
      message: this.deleteMessage + ' - ' + client.name + ' ?',
      header: this.deleteHeader,
      icon: 'pi pi-info-circle',
      accept: () => {
        this.clientService.deleteClient(client).subscribe((response: Client) => {
          this.messageService.add({severity: 'success', summary: 'Client Deleted', detail: 'You have deleted client - ' + client.name + '.'});
          this.getClients();
        });
      },
      reject: () => {
      }
    });
  }

  editClientVehicles(client: Client) {
    const ref = this.dialogService.open(ClientsVehiclesComponent, {
      header: 'Edit client - ' + client.name + '',
      width: '70%',
      contentStyle: {'max-height': '350px', 'overflow': 'auto'},
      data: client
    });
    ref.onClose.subscribe((client: Client) => {
      if (client) {
        this.getClients();
      }
    });
  }

  getTranslations() {
    this.translateService.get('CLIENT.CREATE.HEADER').subscribe((header: string) => {
      this.createHeader = header;
    });
    this.translateService.get('CLIENT.DELETE_MESSAGE').subscribe((deleteMessage: string) => {
      this.deleteMessage = deleteMessage;
    });
    this.translateService.get('CLIENT.DELETE_HEADER').subscribe((deleteHeader: string) => {
      this.deleteHeader = deleteHeader;
    });

  }

}
