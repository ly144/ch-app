import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzTreeNode } from 'ng-zorro-antd';
import { Course } from '../../../models/Course';
import { BackstageService } from '../../../service/backstage.service';
import { HomeService } from '../../../service/home.service';
import { DatePipe } from '@angular/common';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-backstage-add-course',
  templateUrl: './ch-backstage-add-course.component.html',
  styleUrls: ['./ch-backstage-add-course.component.css']
})
export class ChBackstageAddCourseComponent implements OnInit {

  addCourse: Course = {typeId: 0, difficulty: '', name: '',
    img: 'http://static.runoob.com/images/mix/img_avatar.png', shortIntro: '', intro: '', know: '', learnWhat: '',
    userId: 1, time: '', uploadTime: ''};
  type = '';

  dateTime: Date = new Date();

  isAddOrChange = 'add';

  // 模态框
  isVisible = false;

  direction: string[];
  classifys: string[][];

  // 树分类选择框
  expandKeys = [];
  nodes: NzTreeNode[] = [];

  // 树难度选择框
  nodesDiffcult = [
    new NzTreeNode({
      title: '入门',
      key: '入门',
      isLeaf: true,
    }),
    new NzTreeNode({
      title: '初级',
      key: '初级',
      isLeaf: true,
    }),
    new NzTreeNode({
      title: '中级',
      key: '中级',
      isLeaf: true,
    }),
    new NzTreeNode({
      title: '高级',
      key: '高级',
      isLeaf: true,
    })
  ];
  // 下拉选择框选择
  onChange($event: NzTreeNode): void {
    console.log($event);
  }


  // 模态框，添加课程
  showModal(): void {
    this.isAddOrChange = 'add';
    this.isVisible = true;
  }

  handleOk(): void {
    this.addCourse.uploadTime = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    console.log(this.addCourse.uploadTime);
    this.judgeAddCourse();
  }

  handleCancel(): void {
    this.isVisible = false;
    if (this.isAddOrChange === 'change') {
      this.init();
    }
  }

  // 修改课程
  changeCourse(courseId: number) {
    this.isAddOrChange = 'change';
    this.backstageService.getCourse(courseId)
      .subscribe((value: Course) => {
        this.addCourse = value;
        this.juedeType();
        this.type = '' + this.addCourse.typeId;
        this.isVisible = true;
      });
  }

  init() {
    this.addCourse = {typeId: 0, difficulty: '', name: '',
      img: 'http://static.runoob.com/images/mix/img_avatar.png', shortIntro: '', intro: '', know: '', learnWhat: '',
      userId: 1, time: '', uploadTime: ''};
    this.expandKeys = [];
    this.type = '';
  }

  // 发射消息
  emitFun() {
    this.emitService.eventEmit.emit(this.isAddOrChange);
  }

  constructor(private backstageService: BackstageService,
              private homeService: HomeService,
              private message: NzMessageService,
              private datePipe: DatePipe,
              private emitService: EmitService) { }

  ngOnInit() {
    this.homeService.getDirection()
      .subscribe((value: string[]) => {
        this.direction = value;
        // console.log(this.direction);
      });
    this.homeService.getClassifyAll()
      .subscribe((value: string[][]) =>  {
        this.classifys = value;
        // console.log(this.classifys);
        this.setSelectSection();
      });
  }

  // 初始化设置分类下拉框
  setSelectSection() {
    let top = 1;
    for (let i = 1; i < this.direction.length; i++) {
      const addTree = new NzTreeNode({title: this.direction[i], key: '100' + i});
      addTree.isDisabled = true;
      for (let j = 1; j < this.classifys[i].length; j++) {
        const treeChild = new NzTreeNode({title: this.classifys[i][j], key: '' + top});
        treeChild.isLeaf = true;
        addTree.children.push(treeChild);
        top++;
      }
      // console.log(addTree);
      this.nodes.push(addTree);
    }
  }

  // 判断是否填写正确
  judgeAddCourse() {
    if (this.type === '') {
      this.message.error(`未选择分类`);
    } else if (this.addCourse.difficulty === '') {
      this.message.error(`未选择难度`);
    } else if (this.addCourse.name === '') {
      this.message.error(`未填写课程名`);
    } else if (this.addCourse.img === '') {
      this.message.error(`未选择课程封面`);
    } else if (this.addCourse.shortIntro === '') {
      this.message.error(`未填写课程概述`);
    } else if (this.addCourse.intro === '') {
      this.message.error(`未填写课程简介`);
    } else if (this.addCourse.know === '') {
      this.message.error(`未填写课程须知`);
    } else if (this.addCourse.learnWhat === '') {
      this.message.error(`未填写能学到什么`);
    } else if (this.addCourse.time === '') {
      this.message.error(`未填写课程时长`);
    } else if (this.addCourse.userId === 0) {
      this.message.error(`教师为空`);
    } else if (this.addCourse.uploadTime === '') {
      this.message.error(`时间为空`);
    } else if (this.isAddOrChange === 'add') {
      this.addCourse.typeId = +this.type;
      this.backstageService.setCourse(this.addCourse)
        .subscribe((isSuccess: number) => {
          if (isSuccess > 0) {
            this.message.success(`添加课程成功`);
            this.isVisible = false;
            this.init();
            this.emitFun();
          } else {
            this.message.error(`添加课程失败`);
          }
        });
    } else if (this.isAddOrChange === 'change') {
      this.backstageService.changeCourse(this.addCourse)
        .subscribe(value => {
          if (value) {
            this.message.success(`修改课程成功`);
            this.isVisible = false;
            this.emitFun();
          } else {
            this.message.error(`修改课程失败`);
          }
        });
    }
  }

  juedeType() {
    if (1 <= this.addCourse.typeId && this.addCourse.typeId <= 8) {
      this.expandKeys = ['1001'];
    } else if (9 <= this.addCourse.typeId && this.addCourse.typeId <= 19) {
      this.expandKeys = ['1002'];
    } else if (20 <= this.addCourse.typeId && this.addCourse.typeId <= 30) {
      this.expandKeys = ['1003'];
    } else if (31 <= this.addCourse.typeId && this.addCourse.typeId <= 34) {
      this.expandKeys = ['1004'];
    } else if (35 <= this.addCourse.typeId && this.addCourse.typeId <= 36) {
      this.expandKeys = ['1005'];
    } else if (37 <= this.addCourse.typeId && this.addCourse.typeId <= 45) {
      this.expandKeys = ['1006'];
    } else if (46 <= this.addCourse.typeId && this.addCourse.typeId <= 54) {
      this.expandKeys = ['1007'];
    } else if (55 <= this.addCourse.typeId && this.addCourse.typeId <= 59) {
      this.expandKeys = ['1008'];
    } else if (60 <= this.addCourse.typeId && this.addCourse.typeId <= 65) {
      this.expandKeys = ['1009'];
    } else if (66 <= this.addCourse.typeId && this.addCourse.typeId <= 67) {
      this.expandKeys = ['10010'];
    }
  }

}
