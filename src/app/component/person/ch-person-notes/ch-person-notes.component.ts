import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-person-notes',
  templateUrl: './ch-person-notes.component.html',
  styleUrls: ['./ch-person-notes.component.css']
})
export class ChPersonNotesComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
