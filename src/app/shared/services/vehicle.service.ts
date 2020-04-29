import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../models/vehicle.model';

import * as Constants from './../app-constants';
import {map} from 'rxjs/operators';

@Injectable()
export class VehicleService {
  private endpoint = 'vehicles';
  private port = '8010';
  private URL = `${Constants.APP_URI}:${this.port}/${this.endpoint}`;

  constructor(private http: HttpClient) {}

  public getVehicles(): Observable<[Vehicle]> {
    return this.http
      .get<[Vehicle]>(this.URL);
  }

  public newVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http
      .post<Vehicle>(this.URL, vehicle)
      .pipe(map((response: Vehicle) => response));
  }

  public deleteVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http
      .delete<Vehicle>(`${this.URL}/${vehicle.vin}`)
      .pipe(map((response: any) => response));
  }

  public updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .put<Vehicle>(`${this.URL}/${vehicle.vin}`, vehicle, {headers})
      .pipe(map((response: any) => response));
  }

}
