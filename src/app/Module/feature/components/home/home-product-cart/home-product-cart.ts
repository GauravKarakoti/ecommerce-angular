import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-product-cart',
  imports: [],
  templateUrl: './home-product-cart.html',
  styleUrl: './home-product-cart.scss'
})
export class HomeProductCart {
  @Input() product: any;
}
