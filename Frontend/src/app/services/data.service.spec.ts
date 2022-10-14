import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DataService } from './data.service';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { doesNotReject } from 'assert';
import { Cars, Users } from '../Models/models';

describe('DataService', () => {
  let service: DataService;
  let http: HttpClient;
  let httpCont: HttpTestingController;
  const cars: Cars[] =  [
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
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [DataService],
    });
    service = TestBed.inject(DataService);
    http = TestBed.inject(HttpClient);
    httpCont = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeDefined();
    expect(service).toBeTruthy();
  });
  xit('userApi' , () => { 
    const user: Users[] = [
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
    service.getPosts().subscribe(res => {
      expect(res).toEqual([]);
     });     
    const req = httpCont.expectOne('https://633bde94f11701a65f69b553.mockapi.io/Users');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    httpCont.verify();
    });


  it('carsApi', (done) => {
    service.getCars().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual([]);
    }); 
   const req = httpCont.expectOne('https://633bde94f11701a65f69b553.mockapi.io/Cars');
   expect(req.request.method).toBe('GET');
   expect(req.cancelled).toBeFalsy(); 
   expect(req.request.responseType).toEqual('json');
   httpCont.verify();
   done();
  });
});
