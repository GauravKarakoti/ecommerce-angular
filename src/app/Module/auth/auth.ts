import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, Signin, Signup],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {
  isLoggedIn=true;
  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }
}
