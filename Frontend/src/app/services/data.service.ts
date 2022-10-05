import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient) { }

    getPosts() {
      return this.http.get(`${environment.apiURL}`);
    }
    getUser(){
      return this.http.get(`${environment.userURL}`);
    }
}
