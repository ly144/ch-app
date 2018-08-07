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
  apes: Community;
  person: Person;

  /*是否选择分类*/
  isTag = true;
  tag: string[] = ['数据结构', 'Photoshop', 'Linux', '机器学习', '深度学习', '云计算', '大数据', 'SQL Server', 'MySQL', 'C++'];

  /*推荐、最新、等待回答、话题按钮*/
  beforeSelection = ['an', '', '', ''];
  /*点击四个按钮之一*/
  anBtn(i: number) {
    if (this.beforeSelection[i] !== 'an') {
      this.beforeSelection = [];
      this.beforeSelection[i] = 'an';
    }
  }

  init() {
    this.apeService.getApe()
      .subscribe((ape: Community) => {
      console.log(ape);
      this.apes = ape;
    });
    this.apeService.getApeLogin(+localStorage.getItem('userId'))
      .subscribe((person: Person) => {
      console.log(person);
      this.person = person;
    });
  }

  constructor(private apeService:  ApeService) { }

  ngOnInit() {
    this.init();
  }

}
