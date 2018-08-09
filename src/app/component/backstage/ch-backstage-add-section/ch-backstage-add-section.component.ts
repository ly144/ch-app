import { Component, OnInit } from '@angular/core';
import { Sections} from '../../../models/Sections';
import { NzMessageService } from 'ng-zorro-antd';
import { BackstageService } from '../../../service/backstage.service';
import { EmitService } from '../../../service/emit.service';
import {URL} from '../../../models/uploadUrl';

@Component({
  selector: 'app-ch-backstage-add-section',
  templateUrl: './ch-backstage-add-section.component.html',
  styleUrls: ['./ch-backstage-add-section.component.css']
})
export class ChBackstageAddSectionComponent implements OnInit {

  nzAction = URL + '/uploadfile/upload';
  fileList = [];
  section: Sections = {chapterId: 0, section: 0, name: ''};
  isAddOrChange = 'add'; // 记录当前模态框是提交还是修改

  // 模态框
  isVisible = false;

  // 模态框
  showModal(chapterId: number, section: number): void {
    this.section.chapterId = chapterId;
    this.section.section = section;
    this.isAddOrChange = 'add';
    this.isVisible = true;
  }

  // 模态框确定按钮
  handleOk(): void {
    this.judgeAddSection();
  }

  // 模态框取消按钮
  handleCancel(): void {
    this.isVisible = false;
    if (this.isAddOrChange === 'change') {
      this.init();
    }
  }

  // 修改章按钮
  changeSection(section: Sections) {
    this.isAddOrChange = 'change';
    this.section = section;
    this.fileList = [{url: this.section.video}];
    this.isVisible = true;
  }

  // 初始化章变量
  init() {
    this.section = {chapterId: 0, section: 0, name: ''};
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

  // 上传文件的回调，开始、上传进度、完成、失败都会调用这个函数。
  handleChange(info: any): void {
    if (info.file.response) {
      info.file.url = info.file.response.picture;
      console.log(info.file.response.picture);
      this.section.video = info.file.response.picture;
    }
  }

  judgeAddSection() {
    if (this.section.name === '') {
      this.message.error('未填写节名称');
    } else if (this.isAddOrChange === 'add') {
      this.backstageService.setSection(this.section)
        .subscribe((isSuccess: number) => {
          if (isSuccess) {
            this.message.success(`添加节成功`);
            this.isVisible = false;
            this.init();
            this.emitFun();
          } else {
            this.message.error(`添加节失败`);
          }
        });
    } else if (this.isAddOrChange === 'change') {
      this.backstageService.changeSection(this.section)
        .subscribe((value: number) => {
          if (value) {
            this.message.success(`修改节成功`);
            this.isVisible = false;
            this.emitFun();
          } else {
            this.message.error(`修改节失败`);
          }
        });
    }
  }

}
