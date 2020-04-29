import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsVehiclesComponent } from './clients-vehicles.component';

describe('ClientsVehiclesComponent', () => {
  let component: ClientsVehiclesComponent;
  let fixture: ComponentFixture<ClientsVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
