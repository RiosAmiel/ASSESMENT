import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cars } from '../Models/models';
import { Users } from '../Models/models';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient) { }

    getPosts(): Observable<Users[]> {
      return this.http.get(`${environment.apiURL}`) as Observable<Users[]>;
    }
    getCars(): Observable<Cars[]>{
      return this.http.get(`${environment.carsURL}`) as Observable<Cars[]>;
    }

}
