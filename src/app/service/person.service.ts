import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { URL } from '../models/uploadUrl';
import { catchError } from 'rxjs/internal/operators';
import {Person} from '../models/Person';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  // 个人信息
  personInit(id: number) {
    console.log(id);
    return this.http.post(URL + '/user/getPerson', id, httpOptions)
      .pipe(
        catchError(this.handleError('personInit'))
      );
  }

  // 个人信息之课程
  getPersonCourse(id: number) {
    return this.http.post(URL + '/user/getPersonCourse', id, httpOptions)
      .pipe(
        catchError(this.handleError('getPersonCourse'))
      );
  }

  // 个人信息之猿问
  getPersonApeQuiz(id: number) { // 提问
    return this.http.post(URL + '/user/getPersonApeQuiz', id, httpOptions)
      .pipe(
        catchError(this.handleError('getPersonApeQuiz'))
      );
  }
  getPersonApeAnswer(id: number) { // 回答
    return this.http.post(URL + '/user/getPersonApeAnswer', id, httpOptions)
      .pipe(
        catchError(this.handleError('getPersonApeAnswer'))
      );
  }
  getPersonApeAttention(id: number) { // 关注
    return this.http.post(URL + '/user/getPersonApeAttention', id, httpOptions)
      .pipe(
        catchError(this.handleError('getPersonApeAttention'))
      );
  }

  /**
   * 个人中心之笔记
   * @param {number} id
   * @returns {Observable<any>}
   */
  getPersonNotes(id: number) {
    return this.http.post(URL + '/user/getNotes', id, httpOptions)
      .pipe(
        catchError(this.handleError('getPersonNotes'))
      );
  }

  /**
   * 修改个人信息
   * @param {Person} person
   * @returns {Observable<any>}
   */
  setPerson(person: Person) {
    return this.http.post(URL + '/user/setPerson', JSON.stringify(person), httpOptions)
      .pipe(
        catchError(this.handleError('setPerson'))
      );
  }

  constructor(private http: HttpClient) { }
}
