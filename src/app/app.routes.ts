import { RouterModule, Routes } from '@angular/router';
import { Home } from './Module/feature/components/home/home';
import { Products } from './Module/feature/components/products/products';
import { Cart } from './Module/feature/components/cart/cart';
import { ProductDetails } from './Module/feature/components/product-details/product-details';
import { Checkout } from './Module/feature/components/checkout/checkout';
import { Payment } from './Module/feature/components/payment/payment';
import { PaymentSuccess } from './Module/feature/components/payment-success/payment-success';
import { Order } from './Module/feature/components/order/order';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './Module/admin/admin-routing-module';

export const routes: Routes = [
    { path:'admin', loadChildren: ()=> import("./Module/admin/admin-routing-module").then(m=>AdminRoutingModule) },
    { path:'', component: Home },
    { path:'cart', component: Cart },
    { path:'product-details/:id', component: ProductDetails },
    { path:'checkout', component: Checkout },
    { path:'checkout/payment/:id', component: Payment },
    { path:'payment-success', component: PaymentSuccess },
    { path:'account/orders', component: Order },
    { path:'order/:id', component: Order },
    { path:':levelOne/:levelTwo/:levelThree', component: Products },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }