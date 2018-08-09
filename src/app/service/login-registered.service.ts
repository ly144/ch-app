import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { URL } from '../models/uploadUrl';
import { catchError } from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginRegisteredService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  loginVerify(user) {
    return this.http.post(URL + '/userjwt/login', JSON.stringify(user), httpOptions)
      .pipe(
        catchError(this.handleError('loginVerify'))
      );
  }

  getCode(phone: string) {
    return this.http.post(URL + '/userjwt/sendCode', phone, httpOptions)
      .pipe(
        catchError(this.handleError('getCode'))
      );
  }

  register(reg) {
    return this.http.post(URL + '/userjwt/register', JSON.stringify(reg), httpOptions)
      .pipe(
        catchError(this.handleError('register'))
      );
  }

  getPicture(id: number) {
    return this.http.post(URL + '/user/getPicture', id, httpOptions)
      .pipe(
        catchError(this.handleError('getPicture'))
      );
  }

  constructor(private http: HttpClient) { }
}
