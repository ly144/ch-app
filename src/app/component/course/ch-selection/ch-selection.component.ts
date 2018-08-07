import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../service/home.service';
import { EmitService } from '../../../service/emit.service';

@Component({
  selector: 'app-ch-selection',
  templateUrl: './ch-selection.component.html',
  styleUrls: ['./ch-selection.component.css']
})
export class ChSelectionComponent implements OnInit {
  // 当前选择的三个按钮
  nowSelect: string[] = ['全部', '全部', '全部'];
  // 方向
  direction: string[];
  selection0 = 0;
  // 分类
  all: string[][];
  selection1 = 0;
  classify: string[];
  // 难度
  difficult: string[] = ['全部', '入门', '初级', '中级', '高级'];
  selection2 = 0;
  // 选择方向
  select0(s: string, c: number) {
    this.nowSelect[0] = s;
    this.selection0 = c;
    this.classify = this.all[c];
    this.selection1 = 0;
    this.nowSelect[1] = this.classify[this.selection1];
    console.log(this.nowSelect);
    this.emitFun();
  }
  // 选择分类
  select1(s: string, c: number) {
    this.nowSelect[1] = s;
    this.selection1 = c;
    if (this.selection0 === 0) {
      this.judge(s);
      this.nowSelect[0] = this.direction[this.selection0];
      this.classify = this.all[this.selection0];
    }
    this.emitFun();
  }
  // 判断分类属于哪个方向
  judge(s: string) {
    console.log(s);
    for (let i = 1; i < this.all.length; i++) {
      for (let j = 1; j < this.all[i].length; j++) {
        if (s === this.all[i][j]) {
          console.log(i, j);
          this.selection0 = i;
          this.selection1 = j;
          return;
        }
      }
    }
  }
  // 选择难度
  select2(s: string, c: number) {
    this.nowSelect[2] = s;
    this.selection2 = c;
    this.emitFun();
  }
  // 初始化全部all里面第一行
  init() {
    console.log('init');
    let top = 1;
    for (let i = 1; i < this.all.length; i++) {
      for (let j = 1; j < this.all[i].length; j++) {
        this.all[0][top++] = this.all[i][j];
      }
    }
    this.classify = this.all[0];
    console.log(this.classify);
  }

  // 请求后台数据
  initSelection() {
    this.homeService.getDirection()
      .subscribe((direction: string[]) => {
        console.log(direction);
        this.direction = direction;
      });
    this.homeService.getClassifyAll()
      .subscribe((all: string[][]) => {
        console.log(all);
        this.all = all;
        console.log(this.all);
        console.log('initEND');
        this.init();
        this.emitFun();
      });
  }

  // 发射消息
  emitFun() {
    this.emitService.eventEmit.emit(this.nowSelect);
  }

  constructor(private homeService: HomeService,
              private emitService: EmitService) {
  }

  ngOnInit() {
    this.initSelection();
  }

}
