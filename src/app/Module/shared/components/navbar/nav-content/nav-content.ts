import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { navigation } from './nav-content-data';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-content',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './nav-content.html',
  styleUrl: './nav-content.scss'
})
export class NavContent {
  category:any;
  @Input() selectedSection:any;
  ngOnInit() {
    this.category = navigation.categories.find(cat => cat.id === this.selectedSection);
    console.log("Selected Section:",this.selectedSection);
  }
  constructor(private router:Router) {}
  handleNavigate=(path:any)=>{
    this.router.navigate([ path ])
  }
}