import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/Course';
import { HomeService } from '../../../service/home.service';

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

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.init();
  }

}
