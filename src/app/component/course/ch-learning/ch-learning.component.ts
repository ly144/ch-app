import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EmitService } from '../../../service/emit.service';

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
