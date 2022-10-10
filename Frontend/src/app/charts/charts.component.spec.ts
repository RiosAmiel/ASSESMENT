import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartsComponent } from './charts.component';
import { DataService } from '../services/data.service';


describe('ChartsComponent', () => {
  let service: DataService;
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call load()', () => {
    const spy = spyOn(component,'load');
    component.PullCars();
    expect(spy).toHaveBeenCalledTimes(0);
  });
  it('call PullCars()', () => {
    component.PullCars();
  });
});
