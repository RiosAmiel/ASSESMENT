import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../app/services/data.service';
import * as _ from "lodash";
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private ds: DataService,
    private snack: MatSnackBar,
    private route: Router
  ) { }

  userInfo:any={}
  userEmail!: String;
  userPw!: String;

  ngOnInit(): void {
    this.PullUsers();
  }


  PullUsers(){
    this.ds.getPosts().subscribe((data:any) =>{ 
      console.log(_.filter(data, (item:any) => item.id == '1'));
      console.log(data);
    });
  }
  
  LoginUser(){
    if (this.userEmail == null || this.userPw == null){
      this.snack.open("Please enter required credentials", 'close', {duration:1000});
    }
    else{
      this.ds.getPosts().subscribe((data:any)=>{
        if ( _.filter(data, (item:any) => item.email == this.userEmail && item.password == this.userPw )) {
        this.route.navigate(['home']);
        this.snack.open("Welcome",'close', {duration: 1000});
      }
      else {
        this.snack.open("Incorrect account",'close', {duration: 1000});

      }
    });
    }
    
  }
}
