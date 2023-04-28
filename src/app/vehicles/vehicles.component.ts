import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Vehicle';
import { TotalsVehicles } from './TotalsVehicles';
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
      this.getTotals();
    });
  }

  arrayTotals: Array<TotalsVehicles> =[];
  getTotals(){
    this._vehicles.forEach(element => {
        let aux = this.arrayTotals.find(x=>x.brand.includes(element.marca))
        if(aux)
          aux.quantity += 1;
        else{
          let obj = new TotalsVehicles(`Total ${element.marca}`, 1)
          this.arrayTotals.push(obj);
        }
    });
  }

  ngOnInit() {
    this.getVehicles();
  }
}
