import {Component, OnInit} from '@angular/core';
import {ApeService} from '../../../service/ape.service';
import {DatePipe} from '@angular/common';
import {Community} from '../../../models/Community';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ch-ape-quiz',
  templateUrl: './ch-ape-quiz.component.html',
  styleUrls: ['./ch-ape-quiz.component.css']
})
export class ChApeQuizComponent implements OnInit {

  // 获取题目，以及题目具体内容
  dateTime: Date = new Date();

  quiz: Community = {userId: +localStorage.getItem('userId'), typeId: -1, title: '', content: '', time: ''};

  beforeType = -1;
  // 获取类型
  type: String[];

  selectType(i: number) {
    if (this.beforeType === i) {
      this.beforeType = -1;
    } else {
      this.beforeType = i;
    }
  }

  release() {
    this.quiz.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if (this.quiz.title.length < 5) {
      this.message.error('题目应不少于五个字！');
    } else if (this.beforeType === -1) {
      this.message.error('未选择问题分类');
    } else {
      this.quiz.typeId = this.beforeType + 1;
      // this.quiz.content = (this.quiz.content.split('<p>')[1]).split('</p>')[0];
      // console.log(this.quiz.content);
      this.apeService.setCommunity(this.quiz)
        .subscribe((values: number) => {
          if (values) {
            this.message.success('提问成功！');
            this.router.navigate(['ape']);
          } else {
            this.quiz.typeId -= 1;
            this.message.error('提问失败!');
          }
        });
    }
  }

  init() {
    this.apeService.getClassify()
      .subscribe((type: string[]) => {
        console.log(type);
        this.type = type;
      });
  }

  constructor(private apeService: ApeService,
              private datePipe: DatePipe,
              private message: NzMessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.init();
  }

}
