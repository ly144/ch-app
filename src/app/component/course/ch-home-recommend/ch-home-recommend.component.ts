import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/Course';

@Component({
  selector: 'app-ch-home-recommend',
  templateUrl: './ch-home-recommend.component.html',
  styleUrls: ['./ch-home-recommend.component.css']
})
export class ChHomeRecommendComponent implements OnInit {

  course: Course[] = [{img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
    info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', title: 'HTML+CSS基础课程', difficulty: '入门', people: 899615,
      info: 'HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义'}];

  constructor() { }

  ngOnInit() {
  }

}
