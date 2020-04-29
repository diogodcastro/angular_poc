import {Vehicle} from './vehicle.model';

export class Client {
  constructor(
    public name: string = null,
    public address: string = null,
    public idNumber: string = null,
    public vehicleList?: Vehicle[]
  ) {}
}
