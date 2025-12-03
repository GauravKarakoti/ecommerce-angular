import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureModule } from './Module/feature/feature-module';
import { SharedModule } from './Module/shared/shared-module';
import { AdminModule } from './Module/admin/admin-module';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './State/User/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { CartService } from './State/Cart/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeatureModule, SharedModule, AdminModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecommerce-angular');
  constructor(private dialog:MatDialog, private userService:UserService, private store:Store<AppState>, private cartService:CartService) {

  }
  ngOnInit() {
    if(localStorage.getItem('jwt')) {
      this.userService.getUserProfile();
      this.cartService.getCart();
    }
    this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
      this.userService.getUserProfile();
      this.cartService.getCart();
      console.log("Store: ", user);
    })
  }
}
