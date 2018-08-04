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
  // 发送
  emitFun(value: string) {
    this.emitService.eventEmit.emit(value);
  }

  constructor(private emitService: EmitService) { }

  ngOnInit() {
  }

}
