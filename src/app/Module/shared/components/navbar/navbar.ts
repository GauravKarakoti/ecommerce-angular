import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { NavContent } from './nav-content/nav-content';
import { Router } from '@angular/router';
import { Auth } from '../../../auth/auth';
import { UserService } from '../../../../State/User/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule, NavContent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  currentSection:any;
  isNavbarContentOpen:any;
  userProfile:any;
  constructor(private router:Router, private dialog:MatDialog, private userService:UserService, private store:Store<AppState>) {

  }
  openNavbarContent(section:any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }
  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }
  navigateTo(path:any) {
    this.router.navigate([path]);
  }
  ngOnInit() {
    if(localStorage.getItem('jwt')) {
      this.userService.getUserProfile();
    }
    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.userProfile=user.userProfile;
      if(user.userProfile) {
        this.dialog.closeAll();
      }
      console.log("User: ", user);
    })
  }
  @HostListener('document:click',['$event'])
  onDocumentClick(event:MouseEvent) {
    const modalContainer=document.querySelector(".modal-container");
    const openButtons=document.querySelectorAll(".open-button");
    let clickInsideButton=false;
    openButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)) {
        clickInsideButton=true;
      }
    })
    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }
  handleOpenLoginModel=()=>{
    console.log("Handle Open Login Model");
    this.dialog.open(Auth, {
      width: "400px",
      disableClose: false
    });
  }
  handleLogout=()=>{
    this.userService.logout();
  }
}
