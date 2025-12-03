import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from '../../../shared/components/cart-item/cart-item';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatAnchor } from "@angular/material/button";
import { CartService } from '../../../../State/Cart/cart.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItem, MatDivider, MatAnchor],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cart=[1,1,1];
  cartItems:any;
  constructor(private router: Router,private cartService:CartService,private store:Store<AppState>) {

  }
  ngOnInit() {
    this.cartService.getCart();
    this.store.pipe(select((store)=>store.cart)).subscribe((cart)=>{
      this.cartItems=cart.cartItems;
      console.log("Cart Store: ", cart.cartItems);
    });
  }
  navigateToCheckout() {
    this.router.navigate(["checkout"]);
  }
}
