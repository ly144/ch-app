import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EmitService } from '../../../service/emit.service';
import {CourseChapter} from '../../../models/CourseChapter';

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
  // 评论
  isVisible = false;

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

  // 修改消息
  emitFun(id: number) {
    this.emitService.info = {name: 'learning', id: id};
  }

  constructor(private courseService: CourseService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private emitService: EmitService) {
  }

  ngOnInit() {
    this.init();
  }

}
