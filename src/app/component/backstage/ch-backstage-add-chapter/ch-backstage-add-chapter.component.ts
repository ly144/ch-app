import { Component, OnInit } from '@angular/core';
import {Chapter} from '../../../models/Chapter';
import {BackstageService} from '../../../service/backstage.service';
import {NzMessageService} from 'ng-zorro-antd';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-backstage-add-chapter',
  templateUrl: './ch-backstage-add-chapter.component.html',
  styleUrls: ['./ch-backstage-add-chapter.component.css']
})
export class ChBackstageAddChapterComponent implements OnInit {

  chapter: Chapter = {courseId: 0, chapter: 0, name: '', summary: ''};
  isAddOrChange = 'add'; // 记录当前模态框是提交还是修改

  // 模态框
  isVisible = false;

  // 模态框
  showModal(courseId: number, chapter: number): void {
    this.chapter.courseId = courseId;
    this.chapter.chapter = chapter;
    this.isAddOrChange = 'add';
    this.isVisible = true;
  }

  // 模态框确定按钮
  handleOk(): void {
    this.judgeAddChapter();
  }

  // 模态框取消按钮
  handleCancel(): void {
    this.isVisible = false;
    if (this.isAddOrChange === 'change') {
      this.init();
    }
  }

  // 修改章按钮
  changeChapter(chapter: Chapter) {
    this.isAddOrChange = 'change';
    this.chapter = chapter;
    this.isVisible = true;
  }

  // 初始化章变量
  init() {
    this.chapter = {courseId: 0, chapter: 0, name: '', summary: ''};
  }

  // 发射消息
  emitFun() {
    this.emitService.eventEmit.emit(this.isAddOrChange);
  }

  constructor(private backstageService: BackstageService,
              private message: NzMessageService,
              private emitService: EmitService) { }

  ngOnInit() {
  }

  // 判断提交状态，是否允许修改或添加
  judgeAddChapter() {
    if (this.chapter.name === '') {
      this.message.error('未填写章节名');
    } else if (this.chapter.summary === '') {
      this.message.error('未填写章节简介');
    } else if (this.isAddOrChange === 'add') {
      this.backstageService.setChapter(this.chapter)
        .subscribe((value: number) => {
          if (value) {
            this.message.success(`添加章成功`);
            this.isVisible = false;
            this.emitFun();
            this.init();
          } else {
            this.message.error(`添加章失败`);
          }
        });
    } else if (this.isAddOrChange === 'change') {
      this.backstageService.changeChapter(this.chapter)
        .subscribe((value: number) => {
          if (value) {
            this.message.success(`修改章成功`);
            this.isVisible = false;
            this.emitFun();
          } else {
            this.message.error(`修改章失败`);
          }
        });
    }
  }

}
