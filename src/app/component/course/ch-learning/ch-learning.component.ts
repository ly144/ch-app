import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EmitService } from '../../../service/emit.service';
import {CourseChapter} from '../../../models/CourseChapter';
import {Question} from '../../../models/Question';
import {NzMessageService} from 'ng-zorro-antd';
import {DatePipe} from '@angular/common';
import {Notes} from '../../../models/Notes';
import {Comment} from '../../../models/Comment';
import {LoginRegisteredService} from '../../../service/login-registered.service';

export class CourseLearn {
  courseId: number;
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

  id = 0;
  userId = +localStorage.getItem('userId');
  imgSrc = '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  isRoot = 0;
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
  ques: Question = { userId: this.userId, sectionId: 0, title: '', content: '', time: '' };
  notes: Notes = { userId: this.userId, sectionId: 0, content: '', time: '' };
  com: Comment = { userId: this.userId, sectionId: 0, content: '', time: '' };

  course: CourseLearn;
  url = 'http://10.0.0.34:1234/group1/M00/00/00/wKgZhVtlZvKAZ5hVADJWtlJZhdg350.mp4';

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
      this.ques.sectionId = this.emitService.info.id;
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
      this.notes.sectionId = this.emitService.info.id;
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
      this.com.sectionId = this.emitService.info.id;
      this.courseService.setSectionComment(this.com)
        .subscribe((values: number) => {
          if (values) {
            document.getElementById('commentModalClose').click();
            this.message.success('评论成功！');
          } else  {
            document.getElementById('commentModalClose').click();
            this.message.error('评论失败！');
          }
        });
    }
  }


  CSInit() {
    // 获取章节展开的章节信息
    this.courseService.getChapterSection([this.course.courseId, this.userId])
      .subscribe((courseChapters: CourseChapter) => {
        this.courseChapters = courseChapters;
        console.log(this.courseChapters);
      });
  }

  init() {
    console.log('route:' + this.id);
    this.emitService.info = {name: 'learning', id: this.id};
    this.courseService.getCourseLearn(this.id)
      .subscribe((cl: CourseLearn) => {
        this.course = cl;
        console.log(this.course);
        this.CSInit();
      });
    this.login.getPicture(this.userId)
      .subscribe((img: { success: boolean, root: number, picture: string }) => {
        this.imgSrc = img.picture;
        this.isRoot = img.root;
      });
  }

  loginOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

  constructor(private courseService: CourseService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private emitService: EmitService,
              private datePipe: DatePipe,
              private message: NzMessageService,
              private login: LoginRegisteredService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.emitService.eventEmit.emit('learning');
        this.init();
      });
  }

}
