import {Component, OnInit} from '@angular/core';

export class Learn {
  name: string;
  isOn: string;
  path: string;
}

@Component({
  selector: 'app-ch-learning',
  templateUrl: './ch-learning.component.html',
  styleUrls: ['./ch-learning.component.css']
})
export class ChLearningComponent implements OnInit {

  learn: Learn[] = [
    {name: '问答', isOn: 'on', path: './question'},
    {name: '评论', isOn: '', path: './comment'},
    {name: '同学笔记', isOn: '', path: './notes'},
  ];

  selection = 0;
  nowSelect = '问答';

  select(s: string, c: number) {
    this.learn[this.selection].isOn = '';
    this.nowSelect = s;
    this.learn[c].isOn = 'on';
    this.selection = c;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
