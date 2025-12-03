import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { NavContent } from './components/navbar/nav-content/nav-content';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCard } from './components/product-card/product-card';
import { CartItem } from './components/cart-item/cart-item';
import { AddressCard } from './components/address-card/address-card';
import { OrderTracker } from './components/order-tracker/order-tracker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Navbar, Footer, NavContent, MatIconModule, MatButtonModule, MatMenuModule, ProductCard, CartItem, AddressCard, OrderTracker
  ],
  exports: [
    Navbar, Footer, ProductCard, CartItem, AddressCard, OrderTracker
  ]
})
export class SharedModule { }
