import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/Question';
import {CourseService} from '../../../service/course.service';

@Component({
  selector: 'app-ch-question',
  templateUrl: './ch-question.component.html',
  styleUrls: ['./ch-question.component.css']
})
export class ChQuestionComponent implements OnInit {

  question: Question[];

  btnAll = 'in'; // 全部按钮
  btnArgee = 'out'; // 点赞按钮
  // 移入按钮变化CSS
  changeCSSIn(i: number) {
    if (i === 1 && this.btnAll === 'out') {
      this.btnAll = 'ing';
    } else if (i === 2 && this.btnArgee === 'out') {
      this.btnArgee = 'ing';
    }
  }
  // 移出按钮变化CSS
  changeCSSOut(i: number) {
    if (i === 1 && this.btnAll === 'ing') {
      this.btnAll = 'out';
    } else if (i === 2 && this.btnArgee === 'ing') {
      this.btnArgee = 'out';
    }
  }
  // 点击按钮变化CSS
  clickBtn(i: number) {
    if (i === 1) {
      this.btnAll = 'in';
      this.btnArgee = 'out';
    } else {
      this.btnArgee = 'in';
      this.btnAll = 'out';
    }
  }

  init() {
    this.courseService.getSectionQuestion(1)
      .subscribe((question: Question[]) => {
        this.question = question;
        console.log(this.question);
      });
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.init();
  }

}
