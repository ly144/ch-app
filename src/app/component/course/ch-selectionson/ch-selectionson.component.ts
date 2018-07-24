import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/Course';
import {HomeService} from '../../../service/home.service';
import {EmitService} from '../../../service/emit.service';

export class Butt {
  name: string;
  isOn: string;
  isHover: string;
}

@Component({
  selector: 'app-ch-selectionson',
  templateUrl: './ch-selectionson.component.html',
  styleUrls: ['./ch-selectionson.component.css']
})
export class ChSelectionsonComponent implements OnInit {

  course: Course[];

  // 均为关于按钮的样式切换
  butt: Butt[] = [
    {name: '最新', isOn: 'on', isHover: ''},
    {name: '最热', isOn: '', isHover: ''},
  ];
  selection = 0;
  nowSelect: any[] = ['最新'];

  select(s: string, c: number) {
    this.butt[this.selection].isOn = '';
    this.nowSelect[0] = s;
    this.butt[c].isOn = 'on';
    this.butt[c].isHover = '';
    this.selection = c;
  }

  select1(s: string, c: number) {
    if (this.butt[c].isOn === 'on') {
      this.butt[c].isHover = '';
    } else {
      this.butt[c].isHover = 'hover1';
    }
  }

  select2(s: string, c: number) {
    this.butt[c].isHover = '';
  }

  constructor(private homeService: HomeService,
              public emitService: EmitService) {
  }

  ngOnInit() {
    // 接收发射过来的数据
    this.emitService.eventEmit.subscribe((value: string[]) => {
      // 这里就可以调取接口，刷新userList列表数据
      this.homeService.getSelectionSon(value)
        .subscribe((cou: Course[]) => {
          console.log(cou);
          this.course = cou;
        });
    });
  }

}
