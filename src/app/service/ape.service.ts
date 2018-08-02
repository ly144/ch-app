import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {URL} from '../models/uploadUrl';
import {catchError} from 'rxjs/internal/operators';
import {Community} from '../models/Community';
import {Answer} from '../models/Answer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApeService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // 获取猿问首页问答信息
  getApe() {
    return this.http.post(URL + '/ape/getApe', httpOptions)
      .pipe(
        catchError(this.handleError('getApe'))
      );
  }

  // 获取猿问登录用户头像，用户名
  getApeLogin(id: number) {
    return this.http.post(URL + '/ape/getUserpic', id, httpOptions)
      .pipe(
        catchError(this.handleError('getApeLogin'))
      );
  }

  // 获取猿问问题详细页面提问者信息，以及回答内容,传过去问题id,ch-community
  getApeCommunity(id: number) {
    return this.http.post(URL + '/ape/getApeCommunity', id, httpOptions)
      .pipe(
        catchError(this.handleError('getApeCommunity'))
      );
  }

  // 插入猿问问题详细页面回答者内容,ch-community
  setApeAnswer(answer: Answer) {
    return this.http.post(URL + '/ape/setApeAnswer', JSON.stringify(answer), httpOptions)
      .pipe(
        catchError(this.handleError('setApeAnswer'))
      );
  }

  // 猿问提问页面获取所有分类，ch-ape-quiz
  getClassify() {
    return this.http.get(URL + '/ape/getClassify', httpOptions)
      .pipe(
        catchError(this.handleError('getClassify'))
      );
  }

  // 猿问提问页面传数据，ch-ape-quiz
  setCommunity(community: Community) {
    return this.http.post(URL + '/ape/setCommunity', JSON.stringify(community), httpOptions)
      .pipe(
        catchError(this.handleError('setCommunity'))
      );
  }

  constructor(private  http: HttpClient) { }
}
