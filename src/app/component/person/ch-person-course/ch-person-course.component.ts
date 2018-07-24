import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../service/person.service';

export class PersonCourse {
  time: string;
  year: string;
  month: string;
  day: string;
  img: string;
  name: string;
  learned: number;
  learnProgress: string;
  learnTime: string;
  notesNum: number;
  questionNum: number;
}

@Component({
  selector: 'app-ch-person-course',
  templateUrl: './ch-person-course.component.html',
  styleUrls: ['./ch-person-course.component.css']
})
export class ChPersonCourseComponent implements OnInit {

  personCourse: PersonCourse[];

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

  init() {
    this.personService.getPersonCourse(3)
      .subscribe((personCourse: PersonCourse[]) => {
        console.log(personCourse);
        this.personCourse = personCourse;
        for (const pc of this.personCourse) {
          const time = personCourse[0].time.split('-');
          pc.year = time[0];
          pc.month = time[1];
          pc.day = time[2];
        }
        console.log(this.personCourse);
      });
  }

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.init();
  }

}
