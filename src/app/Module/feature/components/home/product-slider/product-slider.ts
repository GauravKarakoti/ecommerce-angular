import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeProductCart } from '../home-product-cart/home-product-cart';

@Component({
  selector: 'app-product-slider',
  imports: [CommonModule, HomeProductCart],
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.scss'
})
export class ProductSlider {
  @Input() title: any;
  @Input() products: any;
}
