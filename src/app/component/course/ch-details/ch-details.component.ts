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

  detailed2: string[][] = [
    ['课程章节', 'on', './chapter'],
    ['评论', '', './comment'],
    ['同学笔记', '', './notes'],
    ['问答', '', './question'],
  ];
  selection = 0;
  nowSelect = '课程章节';

  select(s: string, c: number) {
    this.detailed2[this.selection][1] = '';
    this.nowSelect = s;
    this.detailed2[c][1] = 'on';
    this.selection = c;
  }

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private emitService: EmitService) {
  }

  // 修改消息
  emitFun(id: number) {
    this.emitService.info = {name: 'details', id: id};
  }

  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('route:' + id);
    this.emitFun(1);
    // 请求后台数据
    this.courseService.getCourseDetail([1, 3])
      .subscribe((detailed: Detailed) => {
        this.detailed = detailed;
        console.log(this.detailed);
        if (this.detailed.learned === 0) {
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
