import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { EmitService, Info } from '../../../service/emit.service';
import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-ch-comment',
  templateUrl: './ch-comment.component.html',
  styleUrls: ['./ch-comment.component.css']
})
export class ChCommentComponent implements OnInit {

  comment: Comment[];
  isLearn = false;

  initCourse(courseId: number) {
    this.courseService.getCourseComment(courseId)
      .subscribe((comment: Comment[]) => {
        this.comment = comment;
        console.log(this.comment);
      });
  }

  initSection(sectionId: number) {
    this.courseService.getSectionComment(sectionId)
      .subscribe((comment: Comment[]) => {
        this.comment = comment;
        console.log(this.comment);
      });
  }

  init() {
    const info: Info = this.emitService.info;
    if (info.name === 'details') {
      console.log('评论接收details');
      this.isLearn = false;
      this.initCourse(info.id);
    } else if (info.name === 'learning') {
      console.log('评论接收learning');
      this.isLearn = true;
      this.initSection(info.id);
    }
  }

  constructor(private courseService: CourseService,
              private emitService: EmitService) { }

  ngOnInit() {
    this.init();
  }

}
