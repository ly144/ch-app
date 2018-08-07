import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { CourseChapter } from '../../../models/CourseChapter';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-course-chapter',
  templateUrl: './ch-course-chapter.component.html',
  styleUrls: ['./ch-course-chapter.component.css']
})
export class ChCourseChapterComponent implements OnInit {
  courseChapters: CourseChapter;
  isLogin = false;

  init() {
    if (+localStorage.getItem('userId') !== 0) {
      this.isLogin = true;
    }
    this.courseService.getChapterSection(this.emitService.info.id)
      .subscribe((courseChapters: CourseChapter) => {
        this.courseChapters = courseChapters;
        console.log(this.courseChapters);
      });
  }

  constructor(private courseService: CourseService,
              private emitService: EmitService) { }

  ngOnInit() {
    this.init();
  }

}
