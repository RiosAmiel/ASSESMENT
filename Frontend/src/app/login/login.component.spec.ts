import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let httSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    httSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ LoginComponent ]
    })
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
