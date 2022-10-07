import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let ds: DataService;
  let http: HttpClient;
  let httpCont: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    ds = TestBed.inject(DataService);
    http = TestBed.inject(HttpClient);
    httpCont = TestBed.inject(HttpTestingController);

    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(ds).toBeDefined();
    expect(component).toBeTruthy();
  });
  it('login api', () => {
    expect(ds.getPosts()).toBeDefined();
  });
});
