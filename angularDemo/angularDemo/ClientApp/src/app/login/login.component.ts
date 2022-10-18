import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../app/services/data.service';
import * as _ from "lodash";
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../Models/models';


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
    private router: Router,
    private readonly fb: FormBuilder
  ) {this.form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
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
    this.redirect(this.users.length);
    }
    catch (e:any) {
      throw Error("The app component has thrown an error!");
    } 
}

  routeHome(): void {
    this.router.navigate(['home']);
    
  }

  redirect(varlenght: number) {
    varlenght == 1 ? this.routeHome(): this.snack.open("Email or Password is incorrect", 'X', {duration:2000}); 
  }
}
