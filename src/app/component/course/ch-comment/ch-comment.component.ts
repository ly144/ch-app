import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course.service';

export class Comment {
  img: string;
  name: string;
  content: string;
  chapter: number;
  section: number;
  sectionName: string;
  agreeNum: number;
  time: string;
}

@Component({
  selector: 'app-ch-comment',
  templateUrl: './ch-comment.component.html',
  styleUrls: ['./ch-comment.component.css']
})
export class ChCommentComponent implements OnInit {

  comment: Comment[];
  /*= [{img: 'http://static.runoob.com/images/mix/img_avatar.png', name: '大叔好可爱',
    content: '1.SpringBoot和SpringMVC的关系SpringBoot是SpringMVC的升级版，两者没有必然的联系，可以直接学SpringBoot', agreeNum: 1, time: '2018-05-21'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: '大叔好可爱',
      content: '1.SpringBoot和SpringMVC的关系SpringBoot是SpringMVC的升级版，两者没有必然的联系，可以直接学SpringBoot', agreeNum: 1, time: '2018-05-21'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: '大叔好可爱',
      content: '1.SpringBoot和SpringMVC的关系SpringBoot是SpringMVC的升级版，两者没有必然的联系，可以直接学SpringBoot', agreeNum: 1, time: '2018-05-21'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: '大叔好可爱',
      content: '1.SpringBoot和SpringMVC的关系SpringBoot是SpringMVC的升级版，两者没有必然的联系，可以直接学SpringBoot', agreeNum: 1, time: '2018-05-21'},
    {img: 'http://static.runoob.com/images/mix/img_avatar.png', name: '大叔好可爱',
      content: '1.SpringBoot和SpringMVC的关系SpringBoot是SpringMVC的升级版，两者没有必然的联系，可以直接学SpringBoot', agreeNum: 1, time: '2018-05-21'}];
*/

  init() {
    this.courseService.getSectionComment(1)
      .subscribe((comment: Comment[]) => {
        this.comment = comment;
        console.log(this.comment);
      });
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.init();
  }

}
