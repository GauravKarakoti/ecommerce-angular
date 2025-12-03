import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from './components/feature';
import { Home } from './components/home/home';
import { MainCarousel } from './components/home/main-carousel/main-carousel';
import { ProductSlider } from './components/home/product-slider/product-slider';
import { HomeProductCart } from './components/home/home-product-cart/home-product-cart';
import { Products } from './components/products/products';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, Feature, Home, MainCarousel, ProductSlider, HomeProductCart, Products, MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  exports:[
    Feature, Home, Products
  ]
})
export class FeatureModule { }
