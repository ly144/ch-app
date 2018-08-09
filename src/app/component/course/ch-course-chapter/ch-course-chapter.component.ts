import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { CourseChapter } from '../../../models/CourseChapter';
import {EmitService} from '../../../service/emit.service';
import {Historical} from '../../../models/Historical';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ch-course-chapter',
  templateUrl: './ch-course-chapter.component.html',
  styleUrls: ['./ch-course-chapter.component.css']
})
export class ChCourseChapterComponent implements OnInit {
  courseChapters: CourseChapter;
  courseId = +this.route.snapshot.paramMap.get('id');
  userId = +localStorage.getItem('userId');
  historical: Historical = {courseId: this.courseId, userId: this.userId, time: ''};
  dateTime: Date = new Date();

  setHistorical(sectionId: number, sectionName: string, chapter: number, section: number) {
    if (this.userId !== 0) {
      this.historical.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
      this.historical.newLearn = sectionId;
      if (this.courseChapters.learningHalf === null) {
        this.historical.learningHalf = '' + sectionId;
      } else {
        const learnedSection: Array<string> = this.courseChapters.learnedSection.split(',');
        const half: Array<string> = this.courseChapters.learningHalf.split(',');
        if (half.indexOf(sectionId + '') < 0 && learnedSection.indexOf(sectionId + '') < 0) {
          this.historical.learningHalf = `${this.courseChapters.learningHalf},${sectionId}`;
        } else {
          this.historical.learningHalf = this.courseChapters.learningHalf;
        }
      }
      this.historical.learnProgress = chapter + '-' + section + ' ' + sectionName;
      this.courseService.setHistorical(this.historical)
        .subscribe((value: number) => {
          if (value > 0) {
            console.log('历史记录成功');
          } else {
            console.log('历史记录失败');
          }
        });
    }
  }

  init() {
    this.courseService.getChapterSection([this.emitService.info.id, this.userId])
      .subscribe((courseChapters: CourseChapter) => {
        this.courseChapters = courseChapters;
        console.log(this.courseChapters);
      });
  }

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private emitService: EmitService) { }

  ngOnInit() {
    this.init();
  }

}
