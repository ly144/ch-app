import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/Question';
import { CourseService } from '../../../service/course.service';
import { EmitService, Info } from '../../../service/emit.service';
import {NzMessageService} from 'ng-zorro-antd';
import {DatePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ch-question',
  templateUrl: './ch-question.component.html',
  styleUrls: ['./ch-question.component.css']
})
export class ChQuestionComponent implements OnInit {

  isLearn = false;
  // 问答交互
  dateTime: Date = new Date();
  ques: Question = { userId: 1, sectionId: 1, title: '', content: '', time: '' };

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

  // 问答交互
  submitQues() {
    this.ques.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if ( this.ques.title.length < 5 ) {
      this.message.error('题目应不少于五个字！');
    } else if ( this.ques.content.length < 5 ) {
      this.message.error('题目内容应不少于五个字！');
    } else {
      this.ques.sectionId = +this.route.snapshot.paramMap.get('id');
      this.courseService.setSectionQuestion(this.ques)
        .subscribe((values: number) => {
          if (values) {
            this.message.success('提问成功！');
          } else {
            this.message.error('提问失败!');
          }
        });
    }
  }

  initCourse(courseId: number) {
    this.courseService.getCourseQuestion(courseId)
      .subscribe((question: Question[]) => {
        this.question = question;
        console.log(this.question);
      });
  }

  initSection(sectionId: number) {
    this.courseService.getSectionQuestion(sectionId)
      .subscribe((question: Question[]) => {
        this.question = question;
        console.log(this.question);
      });
  }

  init() {
    const info: Info = this.emitService.info;
    if (info.name === 'details') {
      console.log('问答接收details');
      this.isLearn = false;
      this.initCourse(info.id);
    } else if (info.name === 'learning') {
      console.log('问答接收learning');
      this.isLearn = true;
      this.initSection(info.id);
    }
  }

  constructor(private courseService: CourseService,
              private emitService: EmitService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private message: NzMessageService) { }

  ngOnInit() {
    this.init();
  }

}
