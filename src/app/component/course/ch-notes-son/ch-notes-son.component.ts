import {Component, OnInit} from '@angular/core';
import {Notes} from '../../../models/Notes';
import {CourseService} from '../../../service/course.service';
import {Detailed} from '../../../models/Detailed';

@Component({
  selector: 'app-ch-notes-son',
  templateUrl: './ch-notes-son.component.html',
  styleUrls: ['./ch-notes-son.component.css']
})
export class ChNotesSonComponent implements OnInit {

  notesson: Notes;
  course: Detailed;

  init() {
    this.courseService.getNotesSon(1)
      .subscribe((notesson: Notes) => {
        this.notesson = notesson;
        console.log(this.notesson);
      });
    this.courseService.getNoteSonCourse(1)
      .subscribe((course: Detailed) => {
        this.course = course;
        console.log(this.course);
      });
  }

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.init();
  }

}
