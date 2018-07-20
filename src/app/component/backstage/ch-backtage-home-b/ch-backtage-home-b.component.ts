import { Component, OnInit } from '@angular/core';

export class Sections {
  name: string;
  level: number;
}
export class Chapters {
  name: string;
  intro: string;
  level: number;
  expand: boolean;
  sections: Sections[];
}
export class Course {
  name: string;
  difficulty: string;
  level: number;
  expand: boolean;
  chapters: Chapters[];
}

@Component({
  selector: 'app-ch-backtage-home-b',
  templateUrl: './ch-backtage-home-b.component.html',
  styleUrls: ['./ch-backtage-home-b.component.css']
})
export class ChBacktageHomeBComponent implements OnInit {

  course: Course[] = [
    {
      name: '2小时学会Spring Boot',
      difficulty: '初级',
      level: 0,
      expand: false,
      chapters: [
        {
          name: '第1章 SpringBoot介绍',
          intro: '1-1 SpringBoot介绍和课程安排',
          level: 1,
          expand: false,
          sections: [
            {
              name: '1-1 SpringBoot介绍',
              level: 2,
            }
          ]
        },
        {
          name: '第2章 第一个SpringBoot应用',
          intro: '快速构建第一个SpringBoot应用',
          level: 1,
          expand: false,
          sections: [
            {
              name: '2-1 第一个SpringBoot应用',
              level: 2,
            }
          ]
        },
        {
          name: '第3章 项目属性配置',
          intro: '项目属性配置的各种方法',
          level: 1,
          expand: false,
          sections: [
            {
              name: '3-1 项目属性配置',
              level: 2,
            }
          ]
        },
      ]
    },
    {
      name: 'Spring Boot进阶之Web进阶',
      difficulty: '中级',
      level: 0,
      expand: false,
      chapters: [
        {
          name: '第1章 课程介绍',
          intro: '课程介绍',
          level: 1,
          expand: false,
          sections: [
            {
              name: '1-1 课程介绍',
              level: 2,
            },
          ]
        },
        {
          name: '第2章 Web进阶',
          intro: 'SpringBoot进阶中web方面的内容',
          level: 1,
          expand: false,
          sections: [
            {
              name: '2-0 表单验证',
              level: 2,
            },
            {
              name: '2-1 使用AOP处理请求(上）',
              level: 2,
            },
            {
              name: '2-2 使用AOP处理请求(中）',
              level: 2,
            },
          ]
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
