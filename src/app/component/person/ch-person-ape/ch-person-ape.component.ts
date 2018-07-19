import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ch-person-ape',
  templateUrl: './ch-person-ape.component.html',
  styleUrls: ['./ch-person-ape.component.css']
})
export class ChPersonApeComponent implements OnInit {

  selectBtn = ['on', ''];

  isAnswer = false;

  select(i: number) {
    if (i === 0 && this.selectBtn[i] === '') {
      this.selectBtn[0] = 'on';
      this.selectBtn[1] = '';
      this.selectBtn[2] = '';
      this.isAnswer = false
    } else if (i === 1 && this.selectBtn[i] === '') {
      this.selectBtn[1] = 'on';
      this.selectBtn[0] = '';
      this.selectBtn[2] = '';
      this.isAnswer = true;
    } else if (i === 2 && this.selectBtn[i] === '') {
      this.selectBtn[2] = 'on';
      this.selectBtn[1] = '';
      this.selectBtn[0] = '';
      this.isAnswer = false;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
