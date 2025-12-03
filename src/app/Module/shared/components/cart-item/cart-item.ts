import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatMiniFabAnchor, MatAnchor } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { CartService } from '../../../../State/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [MatIcon, MatMiniFabAnchor, MatAnchor, CommonModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItem {
  @Input() cartItem:any;
  @Input() showButton: any;
  constructor(
    private cartService:CartService
  ) {}
  updateCartItem(num: Number) {
    console.log("Num:",num);
    this.cartService.updateCartItem({
      cartItemId: this.cartItem.Id,
      data: { quantity: num + this.cartItem.quantity }
    })
  }
  removeCartItem() {
    console.log("Remove Cart Item");
    this.cartService.removeCartItem(this.cartItem.id);
  }
}
