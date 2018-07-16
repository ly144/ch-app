import { Component, OnInit } from '@angular/core';

export class Question {
  img: string;
  title: string;
  content: Answer;
  answerNum: number;
  lookNum: number;
  section: string;
  time: string;
}

export class Answer {
  name: string;
  content: string;
}

@Component({
  selector: 'app-ch-question',
  templateUrl: './ch-question.component.html',
  styleUrls: ['./ch-question.component.css']
})
export class ChQuestionComponent implements OnInit {

  question: Question[] = [
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'springboot 和Springmvc什么区别',
      content: {name: '_Gin_', content: '用Spring MVC做项目要写很多配置文件（即XML文件），SpringBoot的目的就是让开发人员从配置文件中解脱出来（即减少配置文件xml的编写），' +
        '但是SpringBoot还是会有一个叫application.properties的配置文件用来配置项目用到的配置信息。'},
      answerNum: 2, lookNum: 274, section: '1-1 SpringBoot介绍', time: '2018-06-26'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'springboot 和Springmvc什么区别',
      content: {name: '_Gin_', content: '用Spring MVC做项目要写很多配置文件（即XML文件），SpringBoot的目的就是让开发人员从配置文件中解脱出来（即减少配置文件xml的编写），' +
      '但是SpringBoot还是会有一个叫application.properties的配置文件用来配置项目用到的配置信息。'},
      answerNum: 2, lookNum: 274, section: '1-1 SpringBoot介绍', time: '2018-06-26'}];

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

  constructor() { }

  ngOnInit() {
  }

}
