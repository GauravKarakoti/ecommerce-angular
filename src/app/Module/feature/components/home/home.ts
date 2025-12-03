import { Component } from '@angular/core';
import { MainCarousel } from './main-carousel/main-carousel';
import { ProductSlider } from './product-slider/product-slider';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { mensShoesPage1 } from '../../../../../Data/shoes';
import { kurtaPage1 } from '../../../../../Data/Kurta/kurta';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-home',
  imports: [MainCarousel, ProductSlider],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  menJeans: any;
  womenGouns: any;
  lenghaCholi: any;
  mensKurta: any;
  mensShoes: any;
  
  ngOnInit() {
    this.menJeans = menJeans.slice(0,5);
    this.womenGouns = gounsPage1.slice(0,5);
    this.lenghaCholi = lehngacholiPage2.slice(0,5);
    this.mensKurta = kurtaPage1.slice(5,10);
    this.mensShoes = mensShoesPage1.slice(0,5);
  }
}
