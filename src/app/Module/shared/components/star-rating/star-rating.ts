import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-star-rating',
  imports: [CommonModule, MatIcon],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss'
})
export class StarRating {
  maxRating=5;
  initialRating=3;
  stars:any;
  currentRating=0;
  constructor() {
    this.stars=Array(this.maxRating).fill(0).map((_,i)=>i+1);
    this.currentRating=this.initialRating;
  }
  rate(rating:number) {
    this.currentRating=rating;
  }
}
