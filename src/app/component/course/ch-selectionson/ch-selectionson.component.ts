import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/Course';

export class Butt {
  name: string;
  isOn: string;
  isHover: string;
}

@Component({
  selector: 'app-ch-selectionson',
  templateUrl: './ch-selectionson.component.html',
  styleUrls: ['./ch-selectionson.component.css']
})
export class ChSelectionsonComponent implements OnInit {

  course: Course[] = [{img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
    info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'}];

  butt: Butt[] = [
    {name: '最新', isOn: 'on', isHover: ''},
    {name: '最热', isOn: '', isHover: ''},
  ]

  selection = 0;
  nowSelect: any[] = ['最新'];

  select(s: string , c: number){
    this.butt[this.selection].isOn = '';
    this.nowSelect[0] = s;
    this.butt[c].isOn = 'on';
    this.butt[c].isHover = '';
    this.selection = c;
  }

  select1(s: string , c: number) {
    if (this.butt[c].isOn === 'on') {
      this.butt[c].isHover = '';
    } else {
      this.butt[c].isHover = 'hover1';
    }
  }

  select2(s: string , c: number) {
      this.butt[c].isHover = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
