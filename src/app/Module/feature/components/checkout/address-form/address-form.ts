import { Component } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { AddressCard } from '../../../../shared/components/address-card/address-card';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from "@angular/material/button";
import { OrderService } from '../../../../../State/Order/order.service';

@Component({
  selector: 'app-address-form',
  imports: [MatDivider, AddressCard, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatAnchor],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss'
})
export class AddressForm {
  addresses=[1,1,1]
  myForm!: FormGroup; 
  constructor(private formBuilder: FormBuilder, private orderService:OrderService) {
    this.myForm = this.formBuilder.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      streetAddress:["", Validators.required],
      city:["", Validators.required],
      state:["", Validators.required],
      zipCode:["", Validators.required],
      mobile:["", Validators.required],
    })
  }
  handleCreateOrder(item: any) {

  }
  handleSubmit=() => {
    const formValue=this.myForm.value;
    this.orderService.createOrder(formValue);
    console.log("Form Data:", formValue);
  }
}
