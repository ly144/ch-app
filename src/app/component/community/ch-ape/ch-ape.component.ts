import { Component, OnInit } from '@angular/core';
import {ApeService} from '../../../service/ape.service';
import {Community} from '../../../models/Community';
import {Person} from '../../../models/Person';

@Component({
  selector: 'app-ch-ape',
  templateUrl: './ch-ape.component.html',
  styleUrls: ['./ch-ape.component.css']
})
export class ChApeComponent implements OnInit {

  /*问答数组*/
  apes: Community[];
  person: Person;

  // 分类
  tag: string[];
  beforeType = -1;

  /*最新、最热*/
  beforeSelection = ['an', ''];
  /*点击两个按钮之一*/
  anBtn(i: number) {
    if (this.beforeSelection[i] !== 'an') {
      this.beforeSelection = [];
      this.beforeSelection[i] = 'an';
      this.sort(i);
    }
  }

  // 点击分类
  selectType(i: number) {
    if (this.beforeType === i) {
      this.beforeType = -1;
    } else {
      this.beforeType = i;
    }
    this.apeService.findCommunity((this.beforeType + 1))
      .subscribe((value: Community[]) => {
        this.apes = value;
        if (this.beforeSelection[0] === 'an') {
          this.sort(0);
        } else {
          this.sort(1);
        }
      });
  }

  init() {
    this.apeService.getApe()
      .subscribe((ape: Community[]) => {
        console.log(ape);
        this.apes = ape;
        this.sort(0);
        this.beforeSelection = ['an', ''];
      });
    this.apeService.getApeLogin(+localStorage.getItem('userId'))
      .subscribe((person: Person) => {
        console.log(person);
        this.person = person;
      });
    this.apeService.getClassify()
      .subscribe((tag: string[]) => {
        console.log(tag);
        this.tag = tag;
      });
  }

  constructor(private apeService:  ApeService) { }

  ngOnInit() {
    this.init();
  }

  // 冒泡排序
  sort(top: number) {
    if (top === 1) {
      for (let i = 0; i < this.apes.length - 1; i++) {
        for (let j = i + 1; j < this.apes.length; j++) {
          if (this.apes[i].lookNum < this.apes[j].lookNum) {
            const temp = this.apes[i];
            this.apes[i] = this.apes[j];
            this.apes[j] = temp;
          }
        }
      }
    } else if (top === 0) {
      for (let i = 0; i < this.apes.length - 1; i++) {
        for (let j = i + 1; j < this.apes.length; j++) {
          if (this.apes[i].time < this.apes[j].time) {
            const temp = this.apes[i];
            this.apes[i] = this.apes[j];
            this.apes[j] = temp;
          }
        }
      }
    }
  }

}
