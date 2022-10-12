import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LoginComponent } from './login.component';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Users } from '../Models/models';
import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fix: ComponentFixture<LoginComponent>;
  let http: HttpClient;
  let httpCont: HttpTestingController;
  let ds: DataService;
  const users: Users[] = []
  let router: Router;
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        HttpClientTestingModule, 
        ReactiveFormsModule,
        MatSnackBarModule,
        RouterTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: Router, useValue: router }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
      
    }).compileComponents();

    fix = TestBed.createComponent(LoginComponent);
    component = fix.componentInstance;
    ds = TestBed.inject(DataService);
    fix.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cover LoginUser()', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['password'].setValue("123123123");
    fix.detectChanges();
    expect(component.form.valid).toBeTruthy();
    let account: Users[] =[
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
    component.filtUsers = account;
    let user: Users[] =[
      {
        "createdAt": "2022-10-06T21:36:51.155Z",
        "name": "Franklin Rath",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg",
        "password": "tQzoP3W8WY52ORl",
        "email": "Alvah_Abernathy@gmail.com",
        "job": "Communications",
        "id": "1"
       }
    ]
    component.users = user;
    expect(component.users.length).toBe(1);
    expect(component.users).toEqual(user);
    fix.detectChanges();
    component.LoginUser();
    const navigateSpy = spyOn(router, 'navigate');
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });

  it('covers PullUser()', () => {
    spyOn(ds, 'getPosts').and.returnValue(of(users));
    component.PullUsers();
    fix.detectChanges();
    expect(component.filtUsers).toEqual(users);
  });

  it('form invalid',() => {
    expect(component.form.valid).toBeFalsy();
  });
});
