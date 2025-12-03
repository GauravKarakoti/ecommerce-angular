import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from '@angular/common';
import { ProductReviewCard } from './product-review-card/product-review-card';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { ProductCard } from "../../../shared/components/product-card/product-card";
import { StarRating } from "../../../shared/components/star-rating/star-rating";
import { MatAnchor } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../State/Product/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { CartService } from '../../../../State/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [MatRadioModule, FormsModule, MatAnchor, CommonModule, ProductReviewCard, MatProgressBarModule, ProductCard, StarRating],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  selectedSize:any;
  reviews=[1,1,1];
  relatedProducts:any;
  product:any;
  productId:any;
  constructor(private router:Router, private productService:ProductService, private activatedRoute:ActivatedRoute, private store:Store<AppState>, private cartService:CartService) {

  }
  ngOnInit() {
    this.relatedProducts=lehngacholiPage2;
    const id=this.activatedRoute.snapshot.paramMap.get("id");
    this.productService.findProductById(id);
    this.productId=id;
    this.store.pipe(select((store)=>store.product)).subscribe((product)=>{
      this.product=product?.product;
      console.log("Store Data: ", product.product);
    });
  }
  handleAddToCart() {
    console.log("Selected Size: ",this.selectedSize);
    const data={size:this.selectedSize, productId:this.productId}
    this.cartService.addItemToCart(data);
    this.cartService.getCart();
    this.router.navigate(['cart']);
  }
}
