import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Vehicle';
import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  _vehicles: Array<Vehicle> = [];
  constructor(private vehicleService: VehiclesService) { }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(data => {
      this._vehicles = data;
      console.log(this._vehicles);
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

}
