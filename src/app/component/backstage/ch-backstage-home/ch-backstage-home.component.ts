import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { CourseChapter } from '../../../models/CourseChapter';
import { BackstageService } from '../../../service/backstage.service';
import { Chapter } from '../../../models/Chapter';
import {Sections} from '../../../models/Sections';
import {EmitService} from '../../../service/emit.service';

export class Expand {
  expand: boolean;
  expands: boolean[];
}

@Component({
  selector: 'app-ch-backstage-home',
  templateUrl: './ch-backstage-home.component.html',
  styleUrls: ['./ch-backstage-home.component.css']
})
export class ChBackstageHomeComponent implements OnInit {

  course: CourseChapter[];
  isExpands = 0;
  expands: Expand[] = [];

  // 判断添加章时，为第几章
  judgeBeforeChapter(chapters: Chapter[]): number {
    if (chapters.length === 0) {
      return 1;
    } else {
      return chapters[chapters.length - 1].chapter + 1;
    }
  }
  // 判断添加节时，为第几节
  judgeBeforeSection(sections: Sections[]): number {
    if (sections.length === 0) {
      return 1;
    } else {
      return sections[sections.length - 1].section + 1;
    }
  }

  // 删除课程
  confirmCourse(courseId: number): void {
    this.backstageService.deleteCourse(courseId)
      .subscribe((value: number) => {
        if (value) {
          this.nzMessageService.success('删除课程成功');
          this.init();
        } else {
          this.nzMessageService.error('删除课程失败');
        }
      });
  }
  // 删除章
  confirmChapter(chapterId: number): void {
    this.backstageService.deleteChapter(chapterId)
      .subscribe((value: number) => {
        if (value) {
          this.nzMessageService.success('删除章成功');
          this.init();
        } else {
          this.nzMessageService.error('删除章失败');
        }
      });
  }
  // 删除节
  confirmSection(sectionId: number): void {
    this.backstageService.deleteSection(sectionId)
      .subscribe((value: number) => {
        if (value) {
          this.nzMessageService.success('删除节成功');
          this.init();
        } else {
          this.nzMessageService.error('删除节失败');
        }
      });
  }

  constructor(private backstageService: BackstageService,
              private nzMessageService: NzMessageService,
              private emitService: EmitService) { }

  ngOnInit(): void {
    console.log('后台首页初始化');
    this.emitService.eventEmit.subscribe((value: string) => {
      if (value === 'change' || value === 'add') {
        console.log(value);
        this.isExpands = 1;
        this.init();
      }
    });
    this.init();
  }

  init() {
    this.backstageService.getCourses(1)
      .subscribe((values: CourseChapter[]) => {
        console.log(values);
        if (this.isExpands === 1) {
          this.expandInit1();
        }
        this.course = values;
        this.sortCourse();
        if (this.isExpands === 0) {
          this.expandInit0();
        }
        this.dataInit();
      });
  }

  // 数据初始化
  dataInit() {
    for (let i = 0; i < this.course.length; i++) {
      this.course[i].level = 0;
      // this.course[i].expand = false;
      this.course[i].expand = this.expands[i].expand;
      for (let j = 0; j < this.course[i].chapters.length; j++) {
        this.course[i].chapters[j].level = 1;
        // this.course[i].chapters[j].expand = false;
        this.course[i].chapters[j].expand = this.expands[i].expands[j];
      }
    }
  }

  // 课程排序
  sortCourse() {
    for (let i = 0; i < this.course.length - 1; i++) {
      for (let j = i + 1; j < this.course.length; j++) {
        if (this.course[i].uploadTime < this.course[j].uploadTime) {
          const temp = this.course[i];
          this.course[i] = this.course[j];
          this.course[j] = temp;
        }
      }
    }
  }

  // 显示框初始化
  expandInit1() {
    for (let i = 0; i < this.course.length; i++) {
      this.expands[i].expand = this.course[i].expand;
      for (let j = 0; j < this.course[i].chapters.length; j++) {
        this.expands[i].expands[j] = this.course[i].chapters[j].expand;
      }
    }
  }
  // 显示框初始化
  expandInit0() {
    for (let i = 0; i < this.course.length; i++) {
      const expand = new Expand();
      expand.expand = false;
      expand.expands = [];
      for (let j = 0; j < this.course[i].chapters.length; j++) {
        expand.expands[j] = false;
      }
      this.expands.push(expand);
    }
  }
}
