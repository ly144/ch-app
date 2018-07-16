import {Component, ElementRef, OnInit} from '@angular/core';

export class Direction {
  title: string;
  num: number;
}

export class Classify {
  title: string;
  content: string[];
  isNone: string;
}

@Component({
  selector: 'app-ch-home',
  templateUrl: './ch-home.component.html',
  styleUrls: ['./ch-home.component.css']
})
export class ChHomeComponent implements OnInit {

  direction: string[] = ['前沿/区域块/人工智能', '前端/小程序/JS', '后端/JAVA/Python', '移动/Android/iOS', '云计算/大数据/容器', '运维/测试/数据库', 'UI设计/3D动画/游戏'];
  classify: Classify[] = [{title: '前沿技术', content: ['微服务', '区域块', '以太坊'], isNone: 'none'},
    {title: '前端开发', content: ['HTML/CSS', 'JavaScript', 'Vue.js', 'React.JS'], isNone: 'none'},
    {title: '后端开发', content: ['Java', 'SpringBoot', 'Python', 'Django'], isNone: 'none'},
    {title: '移动开发', content: ['Android', 'iOS', 'React native', 'WEEX'], isNone: 'none'},
    {title: '算法&数学', content: ['算法与数据结构'], isNone: 'none'},
    {title: '数据库', content: ['MySQL', 'Redis', 'MongoDB', 'Oracle'], isNone: 'none'},
    {title: 'UI设计', content: ['模型设计', '动效动画', '设计基础', '设计工具'], isNone: 'none'}];

  mouseenter(i: number) {
    this.classify[i].isNone = '';
    console.log(i);
    // this.elementRef.nativeElement.getElementById('i').style.color = '#ffffff';
    // this.elementRef.nativeElement.getElementById('i').style.background = '#6B7176';
    // document.getElementById('i').style.background = '#6B7176';
    // document.getElementById('i').style.color = '#ffffff';
  }

  mouseleave(i: number) {
    this.classify[i].isNone = 'none';
    // document.getElementById('i').style.background = '#2b333b';
    // document.getElementById('i').style.color = 'rgba(255,255,255,.6)';
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

}
