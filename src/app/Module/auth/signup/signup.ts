import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../State/Auth/auth.service';

@Component({
  selector: 'app-signup',
  imports: [MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatError, MatAnchor, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  @Input() changeTemplate:any;
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private store:Store, private authService:AuthService) {
    this.loginForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  submitForm():void {
    if(this.loginForm.valid) {
      console.log("Login req data: ",this.loginForm.value);
      this.authService.register(this.loginForm.value);
    }
  }
}
