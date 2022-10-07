import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../app/services/data.service';
import * as _ from "lodash";
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface Users {
  createdAt: string
  name: string
  avatar: string
  password: string
  email: string
  id: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private ds: DataService,
    private snack: MatSnackBar,
    private route: Router,
    private readonly fb: FormBuilder
  ) {this.form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  }); }

  users: Users[] = [];
  filtUsers: Users[] = [];
  name!: string;
  ngOnInit(): void {
  }


  PullUsers(): void {
    this.ds.getPosts().subscribe((data:Users[]) =>{ 
      this.filtUsers = data;
      console.log(this.filtUsers);
    });
  }
  
  LoginUser(): void{
    try {
    const { email, password } = this.form.value;
    this.users = _.filter(this.filtUsers, {"email": email, "password": password});
    console.log(this.users);
      if(_.size(this.users) ){
        this.snack.open("welcome ", 'X', {duration:2000});
        this.route.navigate(['home']);
      }
      else {
        this.snack.open("Password or Email is incorrect", 'X', {duration:2000});
      }
    }
    catch (e:any) {
      console.error(e.message)
    } 
    
  } 
}
