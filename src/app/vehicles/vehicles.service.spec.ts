/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { VehiclesService } from './vehicles.service';

describe('Service: Vehicles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiclesService]
    });
  });

  it('should ...', inject([VehiclesService], (service: VehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
