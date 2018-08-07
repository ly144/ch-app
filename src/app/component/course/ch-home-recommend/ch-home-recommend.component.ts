import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/Course';
import { HomeService } from '../../../service/home.service';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-home-recommend',
  templateUrl: './ch-home-recommend.component.html',
  styleUrls: ['./ch-home-recommend.component.css']
})
export class ChHomeRecommendComponent implements OnInit {

  course: Course[];

  init() {
    this.homeService.getCourse()
      .subscribe( (cou: Course[]) => {
        console.log(cou);
        this.course = cou;
      });
  }

  constructor(private homeService: HomeService,
              private emitService: EmitService) { }

  ngOnInit() {
    this.emitService.eventEmitFind.subscribe((value: string) => {
        console.log(value);
        console.log(value.length);
        if (value !== 'login' && value !== 'register') {
          console.log('find');
          this.homeService.getFindByName(value)
            .subscribe( (cou: Course[]) => {
              this.course = cou;
              console.log(this.course);
            });
        }
    });
    this.init();
  }

}
