import {Component, OnInit} from '@angular/core';

export class Notesson {
  img: string;
  user: string;
  course: string;
  section: string;
  content: string;
  agreeNum: string;
  adoptNum: string;
}

export class Detailed {
  img: string;
  direct: string;
  classify: string;
  course: string;
  difficulty: string;
  length: string;
  number: string;
  score: string;
  author: Author;
}

export class Author {
  img: string;
  name: string;
  job: string;
  intro: string;
}

@Component({
  selector: 'app-ch-notes-son',
  templateUrl: './ch-notes-son.component.html',
  styleUrls: ['./ch-notes-son.component.css']
})
export class ChNotesSonComponent implements OnInit {

  notesson: Notesson[] = [
    {img: 'https://img.mukewang.com/5a9fd02e00018e3308000751-80-80.jpg', user: 'Mach4296504', course: '2小时学会SpringBoot', section: '3-1项目属性配置', content: '笔记内容', agreeNum: '45', adoptNum: '4557'}
  ];

  detailed: Detailed = {
    img: 'https://img.mukewang.com/5a9fd02e00018e3308000751-80-80.jpg',
    direct: '后端开发',
    classify: 'java',
    course: '2小时学会Spring Boot',
    difficulty: '入门',
    length: '1小时45分',
    number: '843217',
    score: '9.6',
    author: {img: 'https://img.mukewang.com/5a9fd02e00018e3308000751-80-80.jpg', name: '廖师兄', job: 'JAVA开发工程师', intro: '载着干货的老司机。微服务，分布式架构方面经验丰富。'}
  };

  courseIntro = '简介：Spring Boot是用来简化Spring应用初始搭建以及开发过程的全新框架，被认为是Spring\n' +
    '          MVC的“接班人”，和微服务紧密联系在一起。通过本门课程的学习，你将学会如何使用Spring Boot快速构建应用程序，初步领略Spring Boot的魅力！其后续课程《Spring\n' +
    '          Boot进阶之Web进阶》.此课专为IT屌丝男程序员打造，女生请慎入！ 讲师实战课程《Spring Boot微信点餐系统》 http://coding.imooc.com/class/117.html 《Spring\n' +
    '          Cloud微服务实战》 http://coding.imooc.com/class/187.html 均已上线'

  constructor() {
  }

  ngOnInit() {
  }

}
