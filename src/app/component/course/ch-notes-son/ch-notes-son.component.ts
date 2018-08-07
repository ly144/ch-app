import {Component, OnInit} from '@angular/core';
import {Notes} from '../../../models/Notes';
import {CourseService} from '../../../service/course.service';
import {Detailed} from '../../../models/Detailed';
import {EmitService} from '../../../service/emit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ch-notes-son',
  templateUrl: './ch-notes-son.component.html',
  styleUrls: ['./ch-notes-son.component.css']
})
export class ChNotesSonComponent implements OnInit {

  notesson: Notes;
  course: Detailed;

  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getNotesSon(id)
      .subscribe((notesson: Notes) => {
        this.notesson = notesson;
        console.log(this.notesson);
      });
    this.courseService.getNoteSonCourse(this.emitService.courseId)
      .subscribe((course: Detailed) => {
        this.course = course;
        console.log(this.course);
      });
  }

  constructor(private courseService: CourseService,
              private emitService: EmitService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.init();
  }

}
