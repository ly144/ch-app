import {Component, OnInit} from '@angular/core';
import {QuestionSon} from '../../../models/QuestionSon';
import {CourseService} from '../../../service/course.service';
import {Answer} from '../../../models/Answer';
import {Person} from '../../../models/Person';
import {ApeService} from '../../../service/ape.service';
import {DatePipe} from '@angular/common';
import {NzMessageService} from 'ng-zorro-antd';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ch-question-son',
  templateUrl: './ch-question-son.component.html',
  styleUrls: ['./ch-question-son.component.css']
})
export class ChQuestionSonComponent implements OnInit {

  // 提问信息
  questionson: QuestionSon;
  // 回答信息
  answer: Answer[];
  // 当前登陆者信息
  person: Person;
  // 回答交互
  dateTime: Date = new Date();
  myAnswer: Answer = {userId: 1, questionId: 1, content: '', time: ''};

  // 传入question.id,传入question.id,传入当前登录者id
  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getQuestionSon(id)
      .subscribe((questionson: QuestionSon) => {
        this.questionson = questionson;
        console.log(this.questionson);
      });
    this.courseService.getQuestionSonAnswer(id)
      .subscribe((answer: Answer[]) => {
        this.answer = answer;
        console.log(this.answer);
      });
    this.apeService.getApeLogin(+localStorage.getItem('userId'))
      .subscribe((person: Person) => {
      console.log(person);
      this.person = person;
    });
  }

  // 回答交互
  answerQues() {
    this.myAnswer.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if (this.myAnswer.content.length < 12) {
      this.message.error('回答内容应不少于五个字！');
    } else {
      this.courseService.setQuestionSonAnswer(this.myAnswer).subscribe((values: number) => {
        if (values) {
          this.message.success('回答成功！');
        } else {
          this.message.error('回答失败！');
        }
      });
    }
  }

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private apeService: ApeService,
              private datePipe: DatePipe,
              private message: NzMessageService) {
  }

  ngOnInit() {
    this.init();
  }

}
