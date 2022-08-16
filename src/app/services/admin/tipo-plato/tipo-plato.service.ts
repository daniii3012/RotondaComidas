import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { default as service } from '../../services.json';

@Injectable({
  providedIn: 'root'
})
export class TipoPlatoService {

  constructor(private http: HttpClient) { }

  allTipos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')?.replace(/['"]+/g, '')}`
      })
    };
    return this.http.get(service.url + service.tipoPlato.endpoint, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addTipo(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')?.replace(/['"]+/g, '')}`
      })
    };
    return this.http.post(service.url + service.tipoPlato.endpoint, data, httpOptions).pipe(
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
