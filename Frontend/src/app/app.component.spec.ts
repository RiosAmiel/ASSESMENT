import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule } from 'igniteui-angular';
import { ReplaySubject } from 'rxjs';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let loc: Location;
  let route: Router
  const eventSubj = new ReplaySubject<RouterEvent>;
  const routerStub = { events: eventSubj.asObservable() }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        IgxLayoutModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
        IgxRippleModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'home', component: HomeComponent},
            { path: 'chart', component: ChartsComponent}
          ])
      ],
      declarations: [
        AppComponent
      ],
      providers: [ { provide: Router, useValue: routerStub }]
    }).compileComponents();
    route = TestBed.inject(Router);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it('covers routerEvent()', () => {
    eventSubj.next(new NavigationStart(1,'home'));
    expect(component.routerEvent).toBeTruthy();
  });
});
