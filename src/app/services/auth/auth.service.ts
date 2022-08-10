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
  
  /*
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${service.token}`
    })
  };
  */

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

    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userToken', JSON.stringify(user.token));
  }

  logout(){
    this.authState = false;
    
    this.user = null;
    this.userToken = null;

    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
  }

  isLogged(){
    return JSON.parse(localStorage.getItem('authenticated') || this.authState.toString());
  }

  
  getUser(){
    return this.user;
  }

  getUserToken(){
    return this.userToken;
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
