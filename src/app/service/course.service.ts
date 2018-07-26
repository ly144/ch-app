import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {URL} from '../models/uploadUrl';
import {catchError} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private handleError<T>(operation = 'operation', result?: T) {
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

  constructor(private http: HttpClient) {
  }
}
