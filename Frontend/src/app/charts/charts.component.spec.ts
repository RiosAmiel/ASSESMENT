import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartsComponent } from './charts.component';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { Cars } from '../Models/models';


describe('ChartsComponent', () => {

  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;
  let ds: DataService;
  const cars: Cars[] = []

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsComponent ],
      imports: [ HttpClientTestingModule, AccumulationChartModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    ds = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('cover PullCars()', () => {
    spyOn(ds, 'getCars').and.returnValue(of(cars));
    fixture.detectChanges();
    component.PullCars();
    expect(component.Cars).toEqual(cars);
    
  });
  it('covers parseFloat()', () => {
    let vehics: Cars[] = [
      {
        "createdAt": "2022-10-06T13:34:55.032Z",
        "car": "Jaguar Civic",
        "stocks": 516.00,
        "id": "1"
       },
       {
        "createdAt": "2022-10-06T12:01:46.253Z",
        "car": "Hyundai Volt",
        "stocks": 150.00,
        "id": "2"
       }
    ];
    component.Cars = vehics;
    component.parseFloat();
    let vehic: Cars[] = [
      {
        "createdAt": "2022-10-06T13:34:55.032Z",
        "car": "Jaguar Civic",
        "stocks": 516.00,
        "id": "1"
       },
       {
        "createdAt": "2022-10-06T12:01:46.253Z",
        "car": "Hyundai Volt",
        "stocks": 150.00,
        "id": "2"
       }
    ];
    expect(component.Cars).toEqual(vehic)
  });
});
