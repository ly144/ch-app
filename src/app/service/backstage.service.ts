import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { URL } from '../models/uploadUrl';
import { catchError } from 'rxjs/internal/operators';
import { Course } from '../models/Course';
import { Chapter } from '../models/Chapter';
import { Sections } from '../models/Sections';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BackstageService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  /**
   * 获取教师课程
   * @param {number} urseId
   * @returns {Observable<any>}
   */
  getCourses(userId: number) {
    return this.http.post(URL + '/backstage/getCourses', userId, httpOptions)
      .pipe(
        catchError(this.handleError('getCourses'))
      );
  }

  /**
   * 根据课程id获取课程
   * @param {number} courseId
   * @returns {Observable<any>}
   */
  getCourse(courseId: number) {
    return this.http.post(URL + '/backstage/getCourse', courseId, httpOptions)
      .pipe(
        catchError(this.handleError('getCourse'))
      );
  }

  /**
   * 添加课程
   * @param {Course} course
   * @returns {Observable<any>}
   */
  setCourse(course: Course) {
    return this.http.post(URL + '/backstage/setCourse', JSON.stringify(course), httpOptions)
      .pipe(
        catchError(this.handleError('setCourse'))
      );
  }

  /**
   * 添加章
   * @param {Chapter} chapter
   * @returns {Observable<any>}
   */
  setChapter(chapter: Chapter) {
    return this.http.post(URL + '/backstage/setChapter', JSON.stringify(chapter), httpOptions)
      .pipe(
        catchError(this.handleError('setChapter'))
      );
  }

  /**
   * 添加节
   * @param {Sections} section
   * @returns {Observable<any>}
   */
  setSection(section: Sections) {
    return this.http.post(URL + '/backstage/setSection', JSON.stringify(section), httpOptions)
      .pipe(
        catchError(this.handleError('setSection'))
      );
  }

  /**
   * 删除课程
   * @param {number} courseId
   * @returns {Observable<any>}
   */
  deleteCourse(courseId: number) {
    return this.http.post(URL + '/backstage/deleteCourse', courseId, httpOptions)
      .pipe(
        catchError(this.handleError('deleteCourse'))
      );
  }

  /**
   * 删除章
   * @param {number} chapterId
   * @returns {Observable<any>}
   */
  deleteChapter(chapterId: number) {
    return this.http.post(URL + '/backstage/deleteChapter', chapterId, httpOptions)
      .pipe(
        catchError(this.handleError('deleteChapter'))
      );
  }

  /**
   * 删除节
   * @param {number} sectionId
   * @returns {Observable<any>}
   */
  deleteSection(sectionId: number) {
    return this.http.post(URL + '/backstage/deleteSection', sectionId, httpOptions)
      .pipe(
        catchError(this.handleError('deleteSection'))
      );
  }

  /**
   * 修改课程
   * @param {Course} course
   * @returns {Observable<any>}
   */
  changeCourse(course: Course) {
    return this.http.post(URL + '/backstage/changeCourse', JSON.stringify(course), httpOptions)
      .pipe(
        catchError(this.handleError('changeCourse'))
      );
  }

  /**
   * 修改章
   * @param {Chapter} chapter
   * @returns {Observable<any>}
   */
  changeChapter(chapter: Chapter) {
    return this.http.post(URL + '/backstage/changeChapter', JSON.stringify(chapter), httpOptions)
      .pipe(
        catchError(this.handleError('changeChapter'))
      );
  }

  /**
   * 修改节
   * @param {Sections} section
   * @returns {Observable<any>}
   */
  changeSection(section: Sections) {
    return this.http.post(URL + '/backstage/changeSection', JSON.stringify(section), httpOptions)
      .pipe(
        catchError(this.handleError('changeSection'))
      );
  }

  uploadImg(formData: FormData) {
    return this.http.post(URL + '/uploadfile/upload', formData, httpOptions)
      .pipe(
        catchError(this.handleError('uploadImg'))
      );
  }

  constructor(private http: HttpClient) { }
}
