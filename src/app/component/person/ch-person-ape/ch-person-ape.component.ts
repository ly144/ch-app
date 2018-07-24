import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../service/person.service';

export class Ape {
  type: string;
  title: string;
  myAnswer: string;
  time: string;
  answerNum: string;
}

@Component({
  selector: 'app-ch-person-ape',
  templateUrl: './ch-person-ape.component.html',
  styleUrls: ['./ch-person-ape.component.css']
})
export class ChPersonApeComponent implements OnInit {

  apes: Ape[]; // 提问或回答或关注内容

  selectBtn = ['on', '', '']; // 当前选择的按钮
  isAnswer = false; // 是否是回答页面
  select(i: number) { // 按钮选择
    if (i === 0 && this.selectBtn[i] === '') {
      this.selectBtn[0] = 'on';
      this.selectBtn[1] = '';
      this.selectBtn[2] = '';
      this.isAnswer = false;
      this.getApe(0);
    } else if (i === 1 && this.selectBtn[i] === '') {
      this.selectBtn[1] = 'on';
      this.selectBtn[0] = '';
      this.selectBtn[2] = '';
      this.isAnswer = true;
      this.getApe(1);
    } else if (i === 2 && this.selectBtn[i] === '') {
      this.selectBtn[2] = 'on';
      this.selectBtn[1] = '';
      this.selectBtn[0] = '';
      this.isAnswer = false;
      this.getApe(2);
    }
  }

  getApe(selection: number) {
    if (selection === 0) {
      this.personService.getPersonApeQuiz(3)
        .subscribe((apes: Ape[]) => {
          console.log(apes);
          this.apes = apes;
        });
    } else if (selection === 1) {
      this.personService.getPersonApeAnswer(3)
        .subscribe((apes: Ape[]) => {
          console.log(apes);
          this.apes = apes;
        });
    } else if (selection === 2) {
      this.personService.getPersonApeAttention(3)
        .subscribe((apes: Ape[]) => {
          console.log(apes);
          this.apes = apes;
        });
    }
  }

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.getPersonApeQuiz(3)
      .subscribe((apes: Ape[]) => {
        console.log(apes);
        this.apes = apes;
      });
  }

}
