import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BASE_API_URL } from '../../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import { getUserProfileFailure, getUserProfileSuccess, logOutSuccess } from './user.action';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = BASE_API_URL + "/api";
  constructor(private http: HttpClient, private store: Store, @Inject(PLATFORM_ID) private platformId: Object) {}
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('jwt');
      if (token) {
        headers = headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return headers;
  }
  getUserProfile() {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/users/profile`, { headers }).pipe(
      map((user: any) => {
        console.log('User Profile Success: ', user);
        return getUserProfileSuccess({ userProfile: user });
      }),
      catchError((error) => {
        return of(
          getUserProfileFailure(
            error.response && error.response.data.message ? error.reponse.data.message : error.message
          )
        )
      })
    ).subscribe((action) => this.store.dispatch(action));
  }
  logout() {
    localStorage.removeItem("jwt");
    this.store.dispatch(logOutSuccess());
  }
}
