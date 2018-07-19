import {Component, OnInit} from '@angular/core';

export class Recentstudy {
  year: string;
  month: string;
  name: string;
  percentage: string;
  update: string;
  timeLen: string;
  learningTo: string;
  noteNum: string;
  code: string;
  question: string;
}

@Component({
  selector: 'app-ch-person-course',
  templateUrl: './ch-person-course.component.html',
  styleUrls: ['./ch-person-course.component.css']
})
export class ChPersonCourseComponent implements OnInit {

  selectBtn = ['on', ''];

  select(i: number) {
    if (i === 0 && this.selectBtn[i] === '') {
      this.selectBtn[0] = 'on';
      this.selectBtn[1] = '';
    } else if (i === 1 && this.selectBtn[i] === '') {
      this.selectBtn[1] = 'on';
      this.selectBtn[0] = '';
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
