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
export class CourseService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  // 获得课程学习视频
  getCourseLearn(id: number) {
    console.log(id);
    return this.http.post(URL + '/user/getPerson', id, httpOptions)
      .pipe(
        catchError(this.handleError('getCourseLearn'))
      );
  }

  constructor(private http: HttpClient) { }
}
