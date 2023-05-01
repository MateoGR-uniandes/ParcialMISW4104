import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './Vehicle';

describe('ParcialMISW4104', () => {
 let component: VehiclesComponent;
 let fixture: ComponentFixture<VehiclesComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiclesComponent ],
     providers: [ VehiclesService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VehiclesComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 3; i++) {
    const vehicle = new Vehicle(
      faker.datatype.number(),
      faker.lorem.words(),
      faker.lorem.words(),
      faker.lorem.word(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.word(),
      faker.lorem.word()
    );
    component._vehicles.push(vehicle);
  }

  fixture.detectChanges();
  debug = fixture.debugElement;
});

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 	it('the table contains 3 content elements', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3);
  });

	it('table contains 1 header element', () => {
	  expect(debug.queryAll(By.css('thead tr'))).toHaveSize(1);
	});

	it('should have the correct brand for the row', () => {
    debug.queryAll(By.css('tbody tr td:nth-child(2)')).forEach((tr, i)=>{
        expect(tr.nativeElement.textContent).toContain(
        component._vehicles[i].marca)
    })
	});

});
