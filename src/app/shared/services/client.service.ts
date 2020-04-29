import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client.model';

import * as Constants from '../app-constants';
import {map} from 'rxjs/operators';


@Injectable()
export class ClientService {
  private endpoint = 'clients';
  private port = '8011';
  private URL = `${Constants.APP_URI}:${this.port}/${this.endpoint}`;

  constructor(private http: HttpClient) {}

  public getClients(): Observable<[Client]> {
    return this.http
      .get<[Client]>(this.URL);
  }

  public newClient(client: Client): Observable<Client> {
    return this.http
      .post<Client>(this.URL, client)
      .pipe(map((response: Client) => response));
  }

  public deleteClient(client: Client): Observable<Client> {
    return this.http
      .delete<Client>(`${this.URL}/${client.idNumber}`)
      .pipe(map((response: any) => response));
  }

  public updateClient(client: Client): Observable<Client> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .put<Client>(`${this.URL}/${client.idNumber}`, client, {headers})
      .pipe(map((response: any) => response));
  }

}
