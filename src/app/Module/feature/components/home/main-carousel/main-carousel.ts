import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeCarouselData } from '../../../../../../Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  imports: [RouterModule, CommonModule],
  templateUrl: './main-carousel.html',
  styleUrl: './main-carousel.scss'
})
export class MainCarousel implements OnInit, OnDestroy {
  carouselData: any;
  currentSlide = 0;
  interval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.carouselData = homeCarouselData;
    if (isPlatformBrowser(this.platformId)) {
      this.autoplay();
    }
  }

  autoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}