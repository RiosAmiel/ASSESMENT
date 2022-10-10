import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { LoginComponent } from './login.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting,} from '@angular/platform-browser-dynamic/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { MatCommonModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fix: ComponentFixture<LoginComponent>;
  let service: DataService;
  let http: HttpClient;
  let httpCont: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientTestingModule, MatCommonModule,
        MatSnackBarModule, MatCardModule, MatTooltipModule,
        MatFormFieldModule, MatIconModule, MatButtonModule,
        NgModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fix = TestBed.createComponent(LoginComponent);
    component = fix.componentInstance;
    fix.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a FormGroup comprised of FormControls', () => {
    component.ngOnInit();
    expect(component.form instanceof FormGroup).toBe(true);
});
});
