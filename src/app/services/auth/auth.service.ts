import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { default as service } from '../services.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState = JSON.parse(localStorage.getItem('authenticated')!) || false;

  private user = JSON.parse(localStorage.getItem('user')!) || null;
  private userToken = JSON.parse(localStorage.getItem('userToken')!) || null;
  private tokenExpiration = JSON.parse(localStorage.getItem('tokenExpiration')!) || null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${this.userToken}`
    })
  };

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post(service.url + service.auth.endpoint, credentials).pipe(
      catchError(this.handleError)
    );
  }

  setAuthState(user: any) {
    this.authState = true;
    
    this.user = user;
    this.userToken = user.token;
    this.tokenExpiration = user.expiration;

    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userToken', JSON.stringify(user.token));
    localStorage.setItem('tokenExpiration', JSON.stringify(user.expiration));
  }

  logout() {
    this.authState = false;
    
    this.user = null;
    this.userToken = null;
    this.tokenExpiration = null;

    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    localStorage.removeItem('tokenExpiration');
  }

  isLogged() {
    let expirationDate = new Date(this.tokenExpiration);
    let currentDate = new Date();
    let expired = false;
    if (expirationDate < currentDate){
      expired = true;
    } else {
      expired = false;
    }
    return (JSON.parse(localStorage.getItem('authenticated') || this.authState.toString()) && !expired)
  }

  
  getUser() {
    return this.user;
  }

  getUserToken() {
    return this.userToken;
  }

  register(data: any) {
    return this.http.post(service.url + service.register.endpoint, data).pipe(
      catchError(this.handleError)
    );
  }

  clientData(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.userToken}`
      })
    };
    return this.http.post(service.url + service.register.clientData, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  };

}
