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

  isLogin = false;
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

  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('route:' + id);
    this.emitService.courseId = id;
    this.emitService.info = {name: 'details', id: id};
    // 请求后台数据
    const userId = +localStorage.getItem('userId');
    if (userId === 0) {
      this.courseService.getDetailNoLogin(id)
        .subscribe((detailed: Detailed) => {
          this.detailed = detailed;
          console.log(this.detailed);
        });
    } else {
      this.courseService.getCourseDetail([id, userId])
        .subscribe((detailed: Detailed) => {
          this.detailed = detailed;
          console.log(this.detailed);
          this.isLogin = true;
          if (this.detailed.learned === 0) {
            this.isLearn = false;
          } else {
            this.isLearn = true;
          }
        });
    }
  }

  ngOnInit() {
    this.init();
  }

}
