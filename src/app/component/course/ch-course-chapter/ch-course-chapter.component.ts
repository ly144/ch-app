import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { CourseChapter } from '../../../models/CourseChapter';

@Component({
  selector: 'app-ch-course-chapter',
  templateUrl: './ch-course-chapter.component.html',
  styleUrls: ['./ch-course-chapter.component.css']
})
export class ChCourseChapterComponent implements OnInit {
  courseChapters: CourseChapter;
  /*= {
    intro: 'Spring Boot是用来简化Spring应用初始搭建以及开发过程的全新框架，被认为是Spring…习，你将学会如何使用Spring Boot快速构建应用程序，初步领略Spring Boot的魅力！',
    chapters: [
    {chapter: 1, name: 'SpringBoot介绍', summary: '1-1 SpringBoot介绍和课程安排',
      sections: [{section: 1, name: 'SpringBoot介绍', time: '05:50', islearn: null, newLearn: null}]},
    {chapter: 2, name: '第一个SpringBoot应用', summary: '快速构建第一个SpringBoot应用',
      sections: [{section: 1, name: 'SpringBoot介绍', time: '05:50', islearn: null, newLearn: null}]},
    {chapter: 3, name: '项目属性配置', summary: '项目属性配置的各种方法',
      sections: [{section: 1, name: 'SpringBoot介绍', time: '05:50', islearn: null, newLearn: null}]},
    {chapter: 4, name: 'Controller的使用', summary: '介绍SpringBoot项目中Controller的使用',
      sections: [{section: 1, name: 'SpringBoot介绍', time: '05:50', islearn: null, newLearn: null}]},
    {chapter: 5, name: '数据库操作', summary: 'SpringBoot中使用spring-data-jpa',
      sections: [{section: 1, name: 'SpringBoot介绍', time: '05:50', islearn: null, newLearn: null}]}]
    };
    */

  init() {
    this.courseService.getChapterSection(1)
      .subscribe((courseChapters: CourseChapter) => {
        this.courseChapters = courseChapters;
        console.log(this.courseChapters);
      });
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.init();
  }

}
