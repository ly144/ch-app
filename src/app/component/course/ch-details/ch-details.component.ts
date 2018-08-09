import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { Detailed } from '../../../models/Detailed';
import { ActivatedRoute } from '@angular/router';
import { EmitService } from '../../../service/emit.service';

@Component({
  selector: 'app-ch-details',
  templateUrl: './ch-details.component.html',
  styleUrls: ['./ch-details.component.css']
})
export class ChDetailsComponent implements OnInit {

  isLearn = false;

  detailed: Detailed;

  detailBtn: string[][] = [
    ['课程章节', 'on', './chapter'],
    ['评论', '', './comment'],
    ['同学笔记', '', './notes'],
    ['问答', '', './question'],
  ];
  selection = 0;
  nowSelect = '课程章节';

  selectDirection() {
    this.emitService.eventEmit.emit([this.detailed.direction, '全部', '全部']);
  }

  selectClassify() {
    this.emitService.eventEmit.emit([this.detailed.direction, this.detailed.classify, '全部']);
  }

  select(s: string, c: number) {
    this.detailBtn[this.selection][1] = '';
    this.nowSelect = s;
    this.detailBtn[c][1] = 'on';
    this.selection = c;
  }

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private emitService: EmitService) {
  }

  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('route:' + id);
    this.emitService.courseId = id;
    this.emitService.info = {name: 'details', id: id};
    // 请求后台数据
    const userId = +localStorage.getItem('userId');
    this.courseService.getCourseDetail([id, userId])
      .subscribe((detailed: Detailed) => {
        this.detailed = detailed;
        console.log(this.detailed);
        if (this.detailed.learnProgress === null) {
          this.isLearn = false;
        } else {
          this.isLearn = true;
        }
      });
  }

  ngOnInit() {
    this.init();
  }

}
