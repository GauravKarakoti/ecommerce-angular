import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckbox } from "@angular/material/checkbox";
import { OrderCard } from "./order-card/order-card";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [MatCheckbox, CommonModule, OrderCard],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order {
  orders=[[1,1],[1,1,1]];
  orderFilter=[
    { value:"on_the_way", label:"On The Way" },
    { value:"delivered", label:"Delivered" },
    { value:"cancelled", label:"Cancelled" },
    { value:"returned", label:"Returned" },
  ];
  constructor(private router:Router) {}
  navigateToOrderDetails = (id: Number) => {
    this.router.navigate([`order/${id}`])
  }
}
