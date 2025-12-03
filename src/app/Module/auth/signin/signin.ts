import { Component, Input } from '@angular/core';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from "@angular/material/input";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatAnchor } from "@angular/material/button";
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../State/Auth/auth.service';

@Component({
  selector: 'app-signin',
  imports: [MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatError, MatAnchor, CommonModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss'
})
export class Signin {
  @Input() changeTemplate:any;
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private store:Store, private authService:AuthService) {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  submitForm():void {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
      console.log("Login req data: ",this.loginForm.value);
    }
  }
}
