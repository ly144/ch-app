import {Component, OnInit} from '@angular/core';
import {Community} from '../../../models/Community';
import {ApeService} from '../../../service/ape.service';
import {Answer} from '../../../models/Answer';
import {NzMessageService} from 'ng-zorro-antd';
import {DatePipe} from '@angular/common';
import {Person} from '../../../models/Person';
import {ActivatedRoute} from '@angular/router';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-community',
  templateUrl: './ch-community.component.html',
  styleUrls: ['./ch-community.component.css']
})
export class ChCommunityComponent implements OnInit {
   // 我要回答
  showAsk = false;

  dateTime: Date = new Date();
  community: Community;
  answer: Answer = {userId: +localStorage.getItem('userId'), communityId: 1, content: '', time: ''};
  person: Person;

  isONFocusClass = false;

  onFocusClass(s: string) {
    if (s === 'on') {
      this.isONFocusClass = true;
    } else if (s === 'off') {
      this.isONFocusClass = false;
    }
  }

  answerQues() {
    this.answer.time = this.datePipe.transform(this.dateTime, 'yyyy-MM-dd');
    if ( this.answer.content.length < 12 ) {
      this.message.error('回答内容应不少于五个字！');
    } else {
      this.answer.communityId = +this.route.snapshot.paramMap.get('id');
      this.apeService.setApeAnswer(this.answer)
        .subscribe((values: number) => {
        if (values) {
          this.message.success('回答成功！');
        } else  {
          this.message.error('回答失败！');
        }
      });
    }
  }

  init() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apeService.getApeCommunity(id)
      .subscribe((community: Community) => {
      console.log(community);
      this.community = community;
    });
    this.apeService.getApeLogin(+localStorage.getItem('userId'))
      .subscribe((person: Person) => {
      console.log(person);
      this.person = person;
    });
  }

  // 我要回答框
  show() {
    if (localStorage.getItem('userId') === null || +localStorage.getItem('userId') === 0) {
      this.emitService.eventEmit.emit('login');
    } else {
      this.showAsk = true;
    }
  }

  constructor(private apeService: ApeService,
              private datePipe: DatePipe,
              private message: NzMessageService,
              private route: ActivatedRoute,
              private emitService: EmitService) {
  }

  ngOnInit() {
    this.init();
  }

}
