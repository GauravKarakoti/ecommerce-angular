import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/api";
import { Store } from "@ngrx/store";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { createOrderFailure, createOrderSuccess, getOrderByIdFailure, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistorySuccess } from "./order.action";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private API_BASE_URL = BASE_API_URL;
    private headers;
    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        });
    }
    createOrder(reqData: any) {
        console.log("Create Order: ", reqData);
        const url = `${this.API_BASE_URL}/api/orders`;
        return this.http
            .post(url, reqData, { headers: this.headers })
            .pipe(
                map((data: any) => {
                    console.log("Created Order: ", data);
                    if(data.id) {     // step=3
                        this.router.navigate([`/checkout/payments/${data.id}`], {
                            queryParams: {step: '3', order_id: data.id}
                        });
                    }
                    console.log("Created Order: ", data);
                    return createOrderSuccess({ order: data });
                }),
                catchError((error: any) => {
                    console.log("Catch Error: ", error);
                    return of(
                        createOrderFailure(
                            error.response && error.response.data.message
                                ? error.response.data.message
                                : error.message
                        )
                    )
                })
            ).subscribe((action) => this.store.dispatch(action));
    }
    getOrderById(orderId: string) {
        const url = `${this.API_BASE_URL}/api/orders/${orderId}`;
        return this.http
            .get(url, { headers: this.headers })
            .pipe(
                map((data: any) => {
                    console.log("Order by Id: ", data);
                    return getOrderByIdSuccess({ order: data });
                }),
                catchError((error: any) => {
                    console.log("Catch: ", error);
                    return of(
                        getOrderByIdFailure(
                            error.response && error.response.data.message
                                ? error.response.data.message
                                : error.message
                        )
                    )
                })
            ).subscribe((action) => this.store.dispatch(action));
    }
    getOrderHistory() {
        const url = `${this.API_BASE_URL}/api/orders/user`;
        return this.http
            .get(url, { headers: this.headers })
            .pipe(
                map((data) => {
                    console.log("Order History: ", data);
                    return getOrderHistorySuccess({ orders: data });
                }),
                catchError((error: any) => {
                    return of(
                        getOrderHistoryFailure(
                            error.response && error.response.data.message
                                ? error.response.data.message
                                : error.message
                        )
                    )
                })
            ).subscribe((action) => this.store.dispatch(action));
    }
}