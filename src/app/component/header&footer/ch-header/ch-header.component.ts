import { Component, OnInit } from '@angular/core';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-header',
  templateUrl: './ch-header.component.html',
  styleUrls: ['./ch-header.component.css']
})
export class ChHeaderComponent implements OnInit {

  onLogin() {
    this.emitFun('login');
  }
  onRegister() {
    this.emitFun('register');
  }
  emitFun(value: string) {
    // 如果组件中，修改了某些数据，需要刷新用用户列表，用户列表在其他组件中，那么就可以发射一个字符串过去，那边接收到这个字符串比对一下，刷新列表。
    this.emitService.eventEmit.emit(value);
  }

  constructor(private emitService: EmitService) { }

  ngOnInit() {
  }

}
