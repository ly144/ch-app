import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../service/course.service';

export class CourseLearn {
  chapter: number;
  section: number;
  name: string;
  video: string;
}

@Component({
  selector: 'app-ch-learning',
  templateUrl: './ch-learning.component.html',
  styleUrls: ['./ch-learning.component.css']
})
export class ChLearningComponent implements OnInit {

  courseLearn: CourseLearn;

  // 选择按钮
  learn: string[][] = [
    ['问答', 'on', './question'],
    ['评论', '', './comment'],
    ['同学笔记', '', './notes'],
  ];
  selection = 0;
  nowSelect = '问答';
  select(s: string, c: number) {
    this.learn[this.selection][1] = '';
    this.nowSelect = s;
    this.learn[c][1] = 'on';
    this.selection = c;
  }

  init() {
    this.courseService.getCourseLearn(1)
      .subscribe((cl: CourseLearn) => {
        this.courseLearn = cl;
        console.log(this.courseLearn);
      });
  }

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
  }

}
