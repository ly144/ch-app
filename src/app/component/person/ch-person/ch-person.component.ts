import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../service/person.service';
import {Person} from '../../../models/Person';

@Component({
  selector: 'app-ch-person',
  templateUrl: './ch-person.component.html',
  styleUrls: ['./ch-person.component.css']
})
export class ChPersonComponent implements OnInit {

  // 用户信息
  person: Person;

  // 个人中心页面按钮控制数组
  personBtn = [
    {'name': '课程', 'isOn': 'on', 'isHover': '', 'route': './person-course'},
    {'name': '笔记', 'isOn': '', 'isHover': '', 'route': './person-notes'},
    {'name': '猿问', 'isOn': '', 'isHover': '', 'route': './person-ape'},
  ];
  // 当前选择按钮标记
  selection = 0;
  // 按钮选择
  select(s: string , c: number) {
    this.personBtn[this.selection].isOn = '';
    this.personBtn[c].isOn = 'on';
    this.personBtn[c].isHover = '';
    this.selection = c;
  }
  // 鼠标移入按钮
  select1(s: string , c: number) {
    if (this.personBtn[c].isOn === 'on') {
      this.personBtn[c].isHover = '';
    } else {
      this.personBtn[c].isHover = 'hover1';
    }
  }
  // 鼠标移出按钮
  select2(s: string , c: number) {
    this.personBtn[c].isHover = '';
  }

  // 个人中心页面初始化
  init() {
    this.personService.personInit(3)
      .subscribe( (per: Person) => {
        console.log(per);
        this.person = per;
      });
  }

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.init();
  }

}
