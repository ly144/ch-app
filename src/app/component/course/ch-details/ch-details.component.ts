import {Component, OnInit} from '@angular/core';

export class Detailed {
  direct: string;
  classify: string;
  course: string;
  difficulty: string;
  length: string;
  number: string;
  score: string;
  author: Author;
}

export class Author {
  img: string;
  name: string;
  job: string;
}

export class Detailed2 {
  name: string;
  isOn: string;
  path: string;
}

@Component({
  selector: 'app-ch-details',
  templateUrl: './ch-details.component.html',
  styleUrls: ['./ch-details.component.css']
})
export class ChDetailsComponent implements OnInit {

  detailed: Detailed = {
    direct: '后端开发',
    classify: 'java',
    course: '2小时学会Spring Boot',
    difficulty: '入门',
    length: '5小时0分',
    number: '843217',
    score: '9.6',
    author: {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: '廖师兄', job: 'JAVA开发工程师'}
  };

   detailed2: Detailed2[] = [
     {name: '课程章节', isOn: 'on', path: './chapter'},
     {name: '评论', isOn: '', path: './comment'},
     {name: '同学笔记', isOn: '', path: './notes'},
     {name: '问答', isOn: '', path: './question'},
   ];

   selection = 0;
   nowSelect = '课程章节';

  select(s: string , c: number) {
    this.detailed2[this.selection].isOn = '';
    this.nowSelect = s;
    this.detailed2[c].isOn = 'on';
    this.selection = c;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
