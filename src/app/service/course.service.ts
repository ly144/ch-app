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
    return this.http.post(URL + '/course/getCourseLearn', id, httpOptions)
      .pipe(
        catchError(this.handleError('getCourseLearn'))
      );
  }

  /**
   * 获取课程节的问答
   * @param {number} id
   * @returns {Observable<any>}
   */
  getSectionQuestion(id: number) {
    return this.http.post(URL + '/course/getSectionQuestion', id, httpOptions)
      .pipe(
        catchError(this.handleError('getSectionQuestion'))
      );
  }

  /**
   * 获取课程节的评论
   * @param {number} id
   * @returns {Observable<any>}
   */
  getSectionComment(id: number) {
    return this.http.post(URL + '/course/getSectionComment', id, httpOptions)
      .pipe(
        catchError(this.handleError('getSectionComment'))
      );
  }

  /**
   * 获取课程节的笔记
   * @param {number} id
   * @returns {Observable<any>}
   */
  getSectionNotes(id: number) {
    return this.http.post(URL + '/course/getSectionNotes', id, httpOptions)
      .pipe(
        catchError(this.handleError('getSectionNotes'))
      );
  }

  constructor(private http: HttpClient) { }
}
