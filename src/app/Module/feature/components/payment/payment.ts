import { Component } from '@angular/core';
import { AddressCard } from "../../../shared/components/address-card/address-card";
import { CartItem } from "../../../shared/components/cart-item/cart-item";
import { CommonModule } from '@angular/common';
import { MatDivider } from "@angular/material/divider";
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../State/Order/order.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-payment',
  imports: [AddressCard, CartItem, CommonModule, MatDivider],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  products=[1,1,1];
  order:any;
  address:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private orderService:OrderService,
    private store:Store<AppState>
  ) {}
  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("Id: ",id);
    if(id) {
      this.orderService.getOrderById(id);
    }
    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      this.order=order.order;
    })
  }
}
