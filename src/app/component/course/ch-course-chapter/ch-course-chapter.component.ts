import { Component, OnInit } from '@angular/core';

export class Chapter {
  name: string;
  chapterIntro: string;
  sections: Section[];
}

export class Section {
  name: string;
  timelen: string;
  islearn: string;
}

@Component({
  selector: 'app-ch-course-chapter',
  templateUrl: './ch-course-chapter.component.html',
  styleUrls: ['./ch-course-chapter.component.css']
})
export class ChCourseChapterComponent implements OnInit {

  courseIntro = '简介：Spring Boot是用来简化Spring应用初始搭建以及开发过程的全新框架，被认为是Spring\n' +
    '          MVC的“接班人”，和微服务紧密联系在一起。通过本门课程的学习，你将学会如何使用Spring Boot快速构建应用程序，初步领略Spring Boot的魅力！其后续课程《Spring\n' +
    '          Boot进阶之Web进阶》.此课专为IT屌丝男程序员打造，女生请慎入！ 讲师实战课程《Spring Boot微信点餐系统》 http://coding.imooc.com/class/117.html 《Spring\n' +
    '          Cloud微服务实战》 http://coding.imooc.com/class/187.html 均已上线'

  chapters: Chapter[] = [
    {name: '第1章 SpringBoot介绍', chapterIntro: '1-1 SpringBoot介绍和课程安排',
      sections: [{name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'}]},
    {name: '第1章 SpringBoot介绍', chapterIntro: '1-1 SpringBoot介绍和课程安排',
      sections: [{name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'}]},
    {name: '第1章 SpringBoot介绍', chapterIntro: '1-1 SpringBoot介绍和课程安排',
      sections: [{name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'},
        {name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'},
        {name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'}]},
    {name: '第1章 SpringBoot介绍', chapterIntro: '1-1 SpringBoot介绍和课程安排',
      sections: [{name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'},
        {name: '1-1 SpringBoot介绍', timelen: '05:50', islearn: 'no'}]}
  ]

  constructor() { }

  ngOnInit() {
  }

}
