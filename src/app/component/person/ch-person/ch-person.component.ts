import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../service/person.service';

export class Person { // 用户信息类
  name: string; // 用户昵称
  picture: string; // 用户头像
  sex: string; // 用户性别
  signature: string; // 用户个性签名
  learnTime: number; // 学习时长
  attentionNum: number; // 关注数
  phone: string; // 用户电话
  email: string; // 用户邮箱
  job: string; // 用户职业
  address: string; // 用户地址
}

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
    {'name': '个人设置', 'isOn': '', 'isHover': '', 'route': './person-set'}
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
    this.personService.personInit('ch')
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
