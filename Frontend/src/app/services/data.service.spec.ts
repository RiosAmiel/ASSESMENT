import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DataService } from './data.service';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { doesNotReject } from 'assert';

describe('DataService', () => {
  let service: DataService;
  let http: HttpClient;
  let httpCont: HttpTestingController;

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
  it('userApi' , () => { 
    service.getPosts().subscribe(res => {
      // expect(res).toEqual(); 
      expect(res.length).toBeGreaterThan(0); 
     }); 
    const req = httpCont.expectOne('https://633bde94f11701a65f69b553.mockapi.io/Users');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    httpCont.verify();
    // service.getPosts().subscribe( res => {(
    //   // expect(res.).toBe('GET');
    //   expect(res.length).toBeGreaterThan(0));
    });


  it('carsApi', () => {
    service.getCars().subscribe(res => {
    }); 
   const req = httpCont.expectOne('https://633bde94f11701a65f69b553.mockapi.io/Cars');
   expect(req.request.method).toBe('GET');
   expect(req.cancelled).toBeFalsy(); 
   expect(req.request.responseType).toEqual('json');
   httpCont.verify();
  });
});
