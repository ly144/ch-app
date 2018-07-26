import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/Question';

@Component({
  selector: 'app-ch-ape',
  templateUrl: './ch-ape.component.html',
  styleUrls: ['./ch-ape.component.css']
})
export class ChApeComponent implements OnInit {

  /*问答数组*/
  question: Question[];
  /*= [
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: '请详细解释一下吧,我怎么感觉二个和第三个都一样呢',
      answer: [{name: 'qq_Ismile_2', content: 'System.out.println(a++); => '}],
      answerNum: 2, agreeNum: 0, opposeNum: 0, lookNum: 274, chapter: 1, section: 1, sectionName: 'JAVA', time: ''},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: '请详细解释一下吧,我怎么感觉二个和第三个都一样呢',
      answer: [{name: 'qq_Ismile_2', content: 'System.out.println(a++); => '}],
      answerNum: 2, agreeNum: 0, opposeNum: 0, lookNum: 274, chapter: 1, section: 1, sectionName: 'JAVA', time: ''}];
      */

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

  constructor() { }

  ngOnInit() {
  }

}
