import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { LoginComponent } from './login.component';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  let dsSpy = jasmine.createSpyObj('DataService', ['getPosts'])
  const users: Users[] =
  [
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
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, MatSnackBarModule,
      RouterTestingModule ],
      providers: [
        { provide: DataService, useValue: dsSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    dsSpy = TestBed.inject(DataService)
  });

  beforeEach(() => {
    fix = TestBed.createComponent(LoginComponent);
    component = fix.componentInstance;
    ds = TestBed.inject(DataService);
    fix.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cover LoginUser()', () => {
      //  component.form.setValue({email: "test@test.com", password: "123123123" });
      component.LoginUser();
      const spyRoute = spyOn(router, "navigate");
      
      //  spyOn(component, 'LoginUser').and.callFake(() =>
      //   ds.getPosts(users).subscribe((result) =>
      //   component.form.value.email(result)));
      //     component.form.value.email(users)
      //     fix.detectChanges();
    });
    
  it('covers PullUser()', () => {
    spyOn(dsSpy, 'getPosts').and.returnValue(of(users));
    component.LoginUser();
    fix.detectChanges();
    expect(dsSpy.getPosts).toHaveBeenCalled();
  });
});
