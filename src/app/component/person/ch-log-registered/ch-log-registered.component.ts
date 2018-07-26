import { Component, OnInit } from '@angular/core';
import {LoginRegisteredService} from '../../../service/login-registered.service';
import {EmitService} from '../../../service/emit.service';

@Component({
  selector: 'app-ch-log-registered',
  templateUrl: './ch-log-registered.component.html',
  styleUrls: ['./ch-log-registered.component.css']
})
export class ChLogRegisteredComponent implements OnInit {

  user = {'username': '', 'password': ''};
  regUser = { 'phone': '', 'code': '' };

  isLogin = true; // 登录页面（ture）或注册页面（false）
  btn = ['btnAn', '']; // 当前按钮是登录按钮或注册按钮
  /**
   * 点击登录按钮或注册按钮转换模态框样式
   */
  onBtn(i: number) {
    if (i === 0 && this.btn[i] === '') {
      this.btn[1] = '';
      this.btn[0] = 'btnAn';
      this.isLogin = true;
    } else if (i === 1 && this.btn[i] === '') {
      this.btn[0] = '';
      this.btn[1] = 'btnAn';
      this.isLogin = false;
    }
  }

  // 登录
  onSubmitLogin() {
    console.log(this.user);
    this.loginRegisteredService.loginVerify(this.user)
      .subscribe( (data) => {
        console.log(data);
      });
  }
  // 注册
  onSubmitRegister() {
    console.log(this.regUser);
  }

  constructor(private loginRegisteredService: LoginRegisteredService,
              private emitService: EmitService) { }

  ngOnInit() {
    // 接收发射过来的数据
    this.emitService.eventEmit.subscribe((value: any) => {
      console.log('LogRegister');
      if (value === 'login') {
        // 这里就可以调取接口，刷新userList列表数据
        this.btn[1] = '';
        this.btn[0] = 'btnAn';
        this.isLogin = true;
        document.getElementById('myLogRegModal').click();
      } else if (value === 'register') {
        this.btn[0] = '';
        this.btn[1] = 'btnAn';
        this.isLogin = false;
        document.getElementById('myLogRegModal').click();
      }
    });
  }

}
