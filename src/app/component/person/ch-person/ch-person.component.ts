import { Component, OnInit } from '@angular/core';

export class Btn {
  name: string;
  isOn: string;
  isHover: string;
  route: string;
}

@Component({
  selector: 'app-ch-person',
  templateUrl: './ch-person.component.html',
  styleUrls: ['./ch-person.component.css']
})
export class ChPersonComponent implements OnInit {

  person: Btn[] = [
    {name: '课程', isOn: 'on', isHover: '', route: './person-course'},
    {name: '笔记', isOn: '', isHover: '', route: './person-notes'},
    {name: '猿问', isOn: '', isHover: '', route: './person-ape'},
    {name: '个人设置', isOn: '', isHover: '', route: './person-set'}
  ];

  selection = 0;
  // nowSelect: any[] = ['课程'];

  select(s: string , c: number){
    this.person[this.selection].isOn = '';
    // this.nowSelect[0] = s;
    this.person[c].isOn = 'on';
    this.person[c].isHover = '';
    this.selection = c;
  }

  select1(s: string , c: number) {
    if (this.person[c].isOn === 'on') {
      this.person[c].isHover = '';
    } else {
      this.person[c].isHover = 'hover1';
    }
  }

  select2(s: string , c: number) {
    this.person[c].isHover = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
