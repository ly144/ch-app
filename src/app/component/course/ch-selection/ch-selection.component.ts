import {Component, OnInit} from '@angular/core';

export class Direction {
  name: string;
  isOn: string;
}

export class Classify {
  content: Direction[];
}

@Component({
  selector: 'app-ch-selection',
  templateUrl: './ch-selection.component.html',
  styleUrls: ['./ch-selection.component.css']
})
export class ChSelectionComponent implements OnInit {

  direction: Direction[] = [{name: '全部', isOn: 'on'}, {name: '前沿技术', isOn: ''},
    {name: '前端开发', isOn: ''}, {name: '后端开发', isOn: ''},
    {name: '移动开发', isOn: ''}, {name: '算法&数学', isOn: ''},
    {name: '云计算&大数据', isOn: ''}, {name: '运维&测试', isOn: ''},
    {name: '数据库', isOn: ''}, {name: 'UI设计', isOn: ''},
    {name: '游戏', isOn: ''}];
  selection0 = 0;

  nowSelect: any[] = ['全部', '全部', '全部'];

  all: Classify[] = [{content: [{name: '全部', isOn: 'on'}]},
    {content: [{name: '全部', isOn: 'on'}, {name: '微服务', isOn: ''}, {name: '区块链', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: 'HTML/CSS', isOn: ''}, {name: 'JavaScript', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: 'Java', isOn: ''}, {name: 'SpringBoot', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: 'Android', isOn: ''}, {name: 'iOS', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: '算法与数据结构', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: '大数据', isOn: ''}, {name: 'Hadoop', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: '运维', isOn: ''}, {name: '自动化运维', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: 'MySQL', isOn: ''}, {name: 'Redis', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: '模型制作', isOn: ''}, {name: '动效动画', isOn: ''}]},
    {content: [{name: '全部', isOn: 'on'}, {name: 'Unity 3D', isOn: ''}, {name: 'Cocos2d-x', isOn: ''}]}];

  selection1 = 0;
  classify: Direction[] = [];

  difficult: Direction[] = [
    {name: '全部', isOn: 'on'},
    {name: '入门', isOn: ''},
    {name: '初级', isOn: ''},
    {name: '中级', isOn: ''},
    {name: '高级', isOn: ''},
  ];

  selection2 = 0;

  select0(s: string, c: number) {
    this.direction[this.selection0].isOn = '';
    this.nowSelect[0] = s;
    this.direction[c].isOn = 'on';
    this.selection0 = c;
    this.classify[this.selection1].isOn = '';
    this.classify = this.all[c].content;
    this.selection1 = 0;
    this.classify[this.selection1].isOn = 'on';
    console.log(this.nowSelect);
  }

  select1(s: string, c: number) {
    this.classify[this.selection1].isOn = '';
    this.nowSelect[1] = s;
    this.classify[c].isOn = 'on';
    this.selection1 = c;
    if (this.selection0 === 0) {
      this.direction[0].isOn = '';
      this.judge(s);
      this.direction[this.selection0].isOn = 'on';
      this.classify = this.all[this.selection0].content;
      this.classify[0].isOn = '';
      this.classify[this.selection1].isOn = 'on';
    }
  }

  judge(s: string) {
    console.log(s);
    for (let i = 1; i < this.all.length; i++) {
      for (let j = 1; j < this.all[i].content.length; j++) {
        if (s === this.all[i].content[j].name) {
          console.log(i, j);
          this.selection0 = i;
          this.selection1 = j;
          return;
        }
      }
    }
  }

  select2(s: string, c: number) {
    this.difficult[this.selection2].isOn = '';
    this.nowSelect[2] = s;
    this.difficult[c].isOn = 'on';
    this.selection2 = c;
  }


  init() {
    let top = 1;
    for (let i = 1; i < this.all.length; i++) {
      for (let j = 1; j < this.all[i].content.length; j++) {
        this.all[0].content[top++] = this.all[i].content[j];
      }
    }
    this.classify = this.all[0].content;
  }

  constructor() {
  }

  ngOnInit() {
    this.init();
  }

}
