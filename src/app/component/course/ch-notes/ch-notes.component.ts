import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { EmitService, Info } from '../../../service/emit.service';
import { Notes } from '../../../models/Notes';

@Component({
  selector: 'app-ch-notes',
  templateUrl: './ch-notes.component.html',
  styleUrls: ['./ch-notes.component.css']
})
export class ChNotesComponent implements OnInit {

  // 笔记数组
  notes: Notes[];

  btnAll = 'in'; // 全部按钮
  btnArgee = 'out'; // 点赞按钮
  // 移入按钮变化CSS
  changeCSSIn(i: number) {
    if (i === 1 && this.btnAll === 'out') {
      this.btnAll = 'ing';
    } else if (i === 2 && this.btnArgee === 'out') {
      this.btnArgee = 'ing';
    }
  }
  // 移出按钮变化CSS
  changeCSSOut(i: number) {
    if (i === 1 && this.btnAll === 'ing') {
      this.btnAll = 'out';
    } else if (i === 2 && this.btnArgee === 'ing') {
      this.btnArgee = 'out';
    }
  }
  // 点击按钮变化CSS
  clickBtn(i: number) {
    if (i === 1) {
      this.btnAll = 'in';
      this.btnArgee = 'out';
    } else {
      this.btnArgee = 'in';
      this.btnAll = 'out';
    }
  }



  initCourse(courseId: number) {
    this.courseService.getCourseNotes(courseId)
      .subscribe((notes: Notes[]) => {
        this.notes = notes;
        console.log(this.notes);
      });
  }

  initSection(sectionId: number) {
    this.courseService.getSectionNotes(sectionId)
      .subscribe((notes: Notes[]) => {
        this.notes = notes;
        console.log(this.notes);
      });
  }

  init() {
    const info: Info = this.emitService.info;
    if (info.name === 'details') {
      console.log('笔记接收details');
      this.initCourse(info.id);
    } else if (info.name === 'learning') {
      console.log('笔记接收learning');
      this.initSection(info.id);
    }
  }

  constructor(private courseService: CourseService,
              private emitService: EmitService) { }

  ngOnInit() {
    this.init();
  }

}
