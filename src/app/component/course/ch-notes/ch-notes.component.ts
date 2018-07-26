import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course.service';

export class Notes {
  img: string;
  name: string;
  chapter: number;
  section: number;
  sectionName: string;
  content: string;
  agreeNum: number;
  gatherNum: number;
  time: string;
}

@Component({
  selector: 'app-ch-notes',
  templateUrl: './ch-notes.component.html',
  styleUrls: ['./ch-notes.component.css']
})
export class ChNotesComponent implements OnInit {

  // 笔记数组
  notes: Notes[];
  /*= [{img: 'http://static.runoob.com/images/mix/img_avatar.png', name: 'Mach4296504', section: '3-1项目属性配置',
    content: '实体类注解@Component@ConfigurationProperties(prefix="girl")', agreeNum: 0, adoptNum: 0, time: '2018-07-09'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: 'Mach4296504', section: '3-1项目属性配置',
      content: '实体类注解@Component@ConfigurationProperties(prefix="girl")', agreeNum: 0, adoptNum: 0, time: '2018-07-09'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: 'Mach4296504', section: '',
      content: '实体类注解@Component@ConfigurationProperties(prefix="girl")', agreeNum: 0, adoptNum: 0, time: '2018-07-09'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: 'Mach4296504', section: '3-1项目属性配置',
      content: '实体类注解@Component@ConfigurationProperties(prefix="girl")', agreeNum: 0, adoptNum: 0, time: '2018-07-09'}];
*/

  btnAll = 'in'; // 全部按钮
  btnArgee = 'out'; // 点赞按钮

  // 移入按钮变化CSS
  changeCSSIn(i: number) {
    if (i === 1 && this.btnAll === 'out') {
      this.btnAll = 'ing';
    } else if (i === 2 && this.btnArgee === 'out') {
      this.btnArgee = 'ing';
    }
  }
  // 移出按钮变化CSS
  changeCSSOut(i: number) {
    if (i === 1 && this.btnAll === 'ing') {
      this.btnAll = 'out';
    } else if (i === 2 && this.btnArgee === 'ing') {
      this.btnArgee = 'out';
    }
  }
  // 点击按钮变化CSS
  clickBtn(i: number) {
    if (i === 1) {
      this.btnAll = 'in';
      this.btnArgee = 'out';
    } else {
      this.btnArgee = 'in';
      this.btnAll = 'out';
    }
  }

  init() {
    this.courseService.getSectionNotes(1)
      .subscribe((notes: Notes[]) => {
        this.notes = notes;
        console.log(this.notes);
      });
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.init();
  }

}
