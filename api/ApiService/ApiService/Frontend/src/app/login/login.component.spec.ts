import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LoginComponent } from './login.component';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Users } from '../Models/models';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fix: ComponentFixture<LoginComponent>;
  let ds: DataService;
  const users: Users[] = [
    {
      "createdAt": "2022-10-06T21:36:51.155Z",
      "name": "Franklin Rath",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg",
      "password": "tQzoP3W8WY52ORl",
      "email": "Alvah_Abernathy@gmail.com",
      "job": "Communications",
      "id": "1"
     },
     {
      "createdAt": "2022-10-06T07:24:27.582Z",
      "name": "Naomi Schmeler IV",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg",
      "password": "VGTuy3ZFAVLbPwD",
      "email": "Cristal.Mills40@gmail.com",
      "job": "Program",
      "id": "2"
     }
  ]
  let router: Router;
  let snackBar: MatSnackBar;

  beforeEach(waitForAsync( () => {
    
     TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        HttpClientTestingModule, 
        ReactiveFormsModule,
        MatSnackBarModule,
        RouterTestingModule,
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: MatSnackBar, snackBar }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
      
    }).compileComponents();

    fix = TestBed.createComponent(LoginComponent);
    component = fix.componentInstance;
    ds = TestBed.inject(DataService);
    router = TestBed.inject(Router);
    snackBar = TestBed.inject(MatSnackBar)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('cover LoginUser()', () => {
    const user = {
      "email": "Cristal.Mills40@gmail.com",
      "password": "VGTuy3ZFAVLbPwD"
    }
    const user2 = {
      "createdAt": "2022-10-06T07:24:27.582Z",
      "name": "Naomi Schmeler IV",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg",
      "password": "VGTuy3ZFAVLbPwD",
      "email": "Cristal.Mills40@gmail.com",
      "job": "Program",
      "id": "2"
     }
    component.form.setValue(user)
    fix.detectChanges();
    component.LoginUser();
    const serve = spyOn(ds, "getPosts").and.returnValue(of(users));
    expect(user).toEqual(serve);
    expect(component.form.valid).toBeTruthy();
  });

  it('covers redicrect', () => {
    const spyx = spyOn(component, 'routeHome');
    component.redirect(1);
    expect(spyx).toHaveBeenCalled();
  });
  it('covers PullUser()', () => {
    spyOn(ds, 'getPosts').and.returnValue(of(users));
    component.PullUsers();
    fix.detectChanges();
    expect(component.filtUsers).toEqual(users);
  });

  it('covers routeHome()',() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.routeHome();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });

  it('form invalid',() => {
    expect(component.form.valid).toBeFalsy();
  });

  it('catch error', () => {
    expect(component.LoginUser).toThrowError("The app component has thrown an error!");
  });
});
