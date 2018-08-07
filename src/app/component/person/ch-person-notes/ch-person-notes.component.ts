import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../../service/person.service';

export class Notes {
  courseName: string;
  chapter: number;
  section: number;
  sectionName: string;
  content: string;
  agreeNum: number;
  gatherNum: number;
  time: string;
}

@Component({
  selector: 'app-ch-person-notes',
  templateUrl: './ch-person-notes.component.html',
  styleUrls: ['./ch-person-notes.component.css']
})
export class ChPersonNotesComponent implements OnInit {

  notes: Notes[];

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
    this.personSerice.getPersonNotes(+localStorage.getItem('userId'))
      .subscribe((notes: Notes[]) => {
        console.log(notes);
        this.notes = notes;
      });
  }

  constructor(private personSerice: PersonService) { }

  ngOnInit() {
    this.init();
  }

}
