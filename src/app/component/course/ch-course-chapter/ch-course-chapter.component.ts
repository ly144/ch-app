import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { CourseChapter } from '../../../models/CourseChapter';

@Component({
  selector: 'app-ch-course-chapter',
  templateUrl: './ch-course-chapter.component.html',
  styleUrls: ['./ch-course-chapter.component.css']
})
export class ChCourseChapterComponent implements OnInit {
  courseChapters: CourseChapter;

  init() {
    this.courseService.getChapterSection(1)
      .subscribe((courseChapters: CourseChapter) => {
        this.courseChapters = courseChapters;
        console.log(this.courseChapters);
      });
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.init();
  }

}
