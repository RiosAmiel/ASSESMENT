import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartsComponent } from './charts.component';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';


describe('ChartsComponent', () => {

  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;
  let ds: DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsComponent ],
      imports: [ HttpClientTestingModule, AccumulationChartModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('cover PullCars()', () => {

  });
});
