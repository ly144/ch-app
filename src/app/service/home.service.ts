import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { URL } from '../models/uploadUrl';
import { catchError } from 'rxjs/internal/operators';
import { Course } from '../models/Course';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  // 获得首页推荐课程详细信息
  getCourse() {
    return this.http.get(URL + '/course/getCourse', httpOptions)
      .pipe(
        catchError(this.handleError('getCourse'))
      );
  }

  // selection中获得方向
  getDirection() {
    return this.http.get(URL + '/selection/getDirection', httpOptions)
      .pipe(
        catchError(this.handleError('getDirection'))
      );
  }

  // selection中获得分类
  getClassifyAll() {
    return this.http.get(URL + '/selection/getClassifyAll', httpOptions)
      .pipe(
        catchError(this.handleError('getClassifyAll'))
      );
  }

  // 获得selection-son中的课程详细信息
  getSelectionSon(nowSelect: string[]) {
    console.log(nowSelect);
    return this.http.post(URL + '/selection/getSelectionSon', JSON.stringify(nowSelect), httpOptions)
      .pipe(
        catchError(this.handleError('getSelectionSon'))
      );
  }

  // 根据名字搜索
  getFindByName(name: string) {
    return this.http.post(URL + '/es/findCourse', name, httpOptions)
      .pipe(
        catchError(this.handleError('getSelectionSon'))
      );
  }

  constructor(private http: HttpClient) { }
}
