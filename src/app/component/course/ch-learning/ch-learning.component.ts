import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import { EmitService } from '../../../service/emit.service';
import {CourseChapter} from '../../../models/CourseChapter';
import {Question} from '../../../models/Question';
import {NzMessageService} from 'ng-zorro-antd';
import {DatePipe} from '@angular/common';
import {Notes} from '../../../models/Notes';
import {Comment} from '../../../models/Comment';

export class CourseLearn {
  chapter: number;
  section: number;
  name: string;
  video: string;
}

@Component({
  selector: 'app-ch-learning',
  templateUrl: './ch-learning.component.html',
  styleUrls: ['./ch-learning.component.css']
})
export class ChLearningComponent implements OnInit {

  // 获取章节展开的章节信息
  courseChapters: CourseChapter;
  showChapter = false;
  showNum = 1;
  // 提问题，做笔记
  showQues = false;
  showColNum = 10;
  showNotes = false;
  // 问答,笔记交互
  dateTime: Date = new Date();
  ques: Question = { userId: 1, sectionId: 1, title: '', content: '', time: '' };
  notes: Notes = { userId: 1, sectionId: 1, content: '', time: '' };
  com: Comment = { userId: 1, sectionId: 1, content: '', time: '' };

  course: CourseLearn;
  url = 'http://static.videogular.com/assets/videos/videogular.mp4';

  // 选择按钮
  learn: string[][] = [
    ['问答', 'on', './question'],
    ['评论', '', './comment'],
    ['同学笔记', '', './notes'],
  ];
  selection = 0;
  nowSelect = '问答';
  select(s: string, c: number) {
    this.learn[this.selection][1] = '';
    this.nowSelect = s;
    this.learn[c][1] = 'on';
    this.selection = c;
  }

  // 安全地址转换
  transform(url: string) {
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(sanitizedUrl);
    return sanitizedUrl;
  }

  // 展开章节方法
  showOne() {
    if (this.showNum === 1) {
      this.showChapter = true;
      this.showNum = 0 ;
    } else if (this.showNum !== 1) {
      this.showChapter = false;
      this.showNum = 1;
    }
  }
  // 展开问答方法
  showTwo() {
    if (this.showColNum === 10) {
      this.showQues = true;
      this.showColNum = 7 ;
    } else if (this.showColNum === 7 && this.showNotes === true) {
      this.showNotes = false;
      this.showQues = true;
    } else if (this.showColNum === 7 && this.showNotes === false) {
      this.showQues = false;
      this.showColNum = 10;
    }
  }
  // 展开笔记方法
  showThree() {
    if (this.showColNum === 10) {
      this.showNotes = true;
      this.showColNum = 7 ;
    } else if (this.showColNum === 7 && this.showQues === true) {
      this.showQues = false;
      this.showNotes = true;
    } else if (this.showColNum === 7 && this.showQues === false) {
      this.showNotes = false;
      this.showColNum = 10;
    }
  }

  // 问答交互
  submitQues() {
    this.ques.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if ( this.ques.title.length < 5 ) {
      this.message.error('题目应不少于五个字！');
    } else if ( this.ques.content.length < 5 ) {
      this.message.error('题目内容应不少于五个字！');
    } else {
      this.courseService.setSectionQuestion(this.ques)
        .subscribe((values: number) => {
          if (values) {
            this.message.success('提问成功！');
          } else {
            this.message.error('提问失败!');
          }
        });
    }
  }
  // 笔记交互
  submitNotes() {
    this.notes.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if ( this.notes.content.length < 5 ) {
      this.message.error('题目内容应不少于五个字！');
    } else {
      this.courseService.setSectionNotes(this.notes)
        .subscribe((values: number) => {
          if (values) {
            this.message.success('记笔记成功！');
          } else  {
            this.message.error('记笔记失败！');
          }
        });
    }
  }
  // 评论交互
  submitCom() {
    this.com.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if ( this.com.content.length < 5 ) {
      this.message.error('评论内容应不少于五个字！');
    } else {
      this.courseService.setSectionComment(this.com)
        .subscribe((values: number) => {
          if (values) {
            this.message.success('评论成功！');
          } else  {
            this.message.error('评论失败！');
          }
        });
    }
  }

  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('route:' + id);
    this.emitFun(1);
    this.courseService.getCourseLearn(1)
      .subscribe((cl: CourseLearn) => {
        this.course = cl;
        console.log(this.course);
      });
    // 获取章节展开的章节信息
    this.courseService.getChapterSection(1)
      .subscribe((courseChapters: CourseChapter) => {
        this.courseChapters = courseChapters;
        console.log(this.courseChapters);
      });
  }

  // 修改消息
  emitFun(id: number) {
    this.emitService.info = {name: 'learning', id: id};
  }

  constructor(private courseService: CourseService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private emitService: EmitService,
              private datePipe: DatePipe,
              private message: NzMessageService) {
  }

  ngOnInit() {
    this.init();
  }

}
