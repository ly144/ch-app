import { Component, OnInit } from '@angular/core';
import {LoginRegisteredService} from '../../../service/login-registered.service';

@Component({
  selector: 'app-ch-log-registered',
  templateUrl: './ch-log-registered.component.html',
  styleUrls: ['./ch-log-registered.component.css']
})
export class ChLogRegisteredComponent implements OnInit {

  isLogin = true; // 登录页面（ture）或注册页面（false）
  btn = ['btnAn', '']; // 当前按钮是登录按钮或注册按钮

  user = {'username': '', 'password': ''};
  regUser = { 'phone': '', 'code': '' };

  /**
   * 点击登录按钮或注册按钮
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

  onSubmitLogin() {
    console.log(this.user);
    this.loginRegisteredService.loginVerify(this.user)
      .subscribe( (data) => {
        console.log(data);
      });
  }

  onSubmitRegister() {
    console.log(this.regUser);
  }

  constructor(private loginRegisteredService: LoginRegisteredService) { }

  ngOnInit() {
  }

}
