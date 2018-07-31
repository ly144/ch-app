import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { URL } from '../models/uploadUrl';
import { catchError } from 'rxjs/internal/operators';
import {Question} from '../models/Question';
import {Notes} from '../models/Notes';
import {Comment} from '../models/Comment';

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

  // 获取课程详细页面的课程信息，教师信息，学生信息
  getCourseDetail(passId: number[]) {
    console.log(passId);
    return this.http.post(URL + '/detail/getCourse', passId, httpOptions)
      .pipe(
        catchError(this.handleError('getCourseDetail'))
      );
  }

  // 获得课程详细页面子页面的课程章节页面的章信息和节信息
  getChapterSection(courseId: number) {
    console.log(courseId);
    return this.http.post(URL + '/detail/getChapterSection', courseId, httpOptions)
      .pipe(
        catchError(this.handleError('getChapterSection'))
      );
  }

  /**
   * 获取课程的问答
   * @param {number} courseId
   * @returns {Observable<any>}
   */
  getCourseQuestion(courseId: number) {
    return this.http.post(URL + '/detail/getCourseQuestion', courseId, httpOptions)
      .pipe(
        catchError(this.handleError('getCourseQuestion'))
      );
  }

  /**
   * 获取课程的评论
   * @param {number} courseId
   * @returns {Observable<any>}
   */
  getCourseComment(courseId: number) {
    return this.http.post(URL + '/detail/getCourseComment', courseId, httpOptions)
      .pipe(
        catchError(this.handleError('getCourseComment'))
      );
  }

  /**
   * 获取课程的笔记
   * @param {number} courseId
   * @returns {Observable<any>}
   */
  getCourseNotes(courseId: number) {
    return this.http.post(URL + '/detail/getCourseNotes', courseId, httpOptions)
      .pipe(
        catchError(this.handleError('getCourseNotes'))
      );
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

  //  插入课程节的问答
  setSectionQuestion(ques: Question) {
    return this.http.post(URL + '/course/setSectionQuestion',  JSON.stringify(ques), httpOptions)
      .pipe(
        catchError(this.handleError('setSectionQuestion'))
      );
  }

  // 插入课程节的笔记
  setSectionNotes(notes: Notes) {
    return this.http.post(URL + '/course/setSectionNotes',  JSON.stringify(notes), httpOptions)
      .pipe(
        catchError(this.handleError('setSectionNotes'))
      );
  }

  // 插入节的评论
  setSectionComment(com: Comment) {
    return this.http.post(URL + '/course/setSectionComment',  JSON.stringify(com), httpOptions)
      .pipe(
        catchError(this.handleError('setSectionComment'))
      );
  }


  constructor(private http: HttpClient) { }
}
