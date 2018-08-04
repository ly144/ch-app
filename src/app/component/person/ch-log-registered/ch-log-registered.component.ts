import { Component, OnInit } from '@angular/core';
import {LoginRegisteredService} from '../../../service/login-registered.service';
import {EmitService} from '../../../service/emit.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-ch-log-registered',
  templateUrl: './ch-log-registered.component.html',
  styleUrls: ['./ch-log-registered.component.css']
})
export class ChLogRegisteredComponent implements OnInit {

  user = {'username': '', 'password': ''};
  userInput = [false, false];
  regUser = {'username':  '', 'password': '', 'phone': '', 'code': '' };
  regInput = [false, false, false, false];

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
      .subscribe( (data: {'id': 0, 'token': ''}) => {
        if (data !== null) {
          this.message.success('登录成功');
          document.getElementById('myModalClose').click();
        } else {
          this.message.success('登录失败');
        }
      });
  }
  // 注册
  onSubmitRegister() {
    console.log(this.regUser);
    this.loginRegisteredService.register(this.regUser)
      .subscribe((value: string) => {
        console.log(value);
        if (value.toString() === 'true') {
          this.message.success('注册成功');
          document.getElementById('myModalClose').click();
        } else {
          this.message.error('注册失败');
        }
      });
  }
  onSubmitCode() {
    if (this.regUser.phone !== '') {
      this.loginRegisteredService.getCode(this.regUser.phone)
        .subscribe((value: string) => {
          console.log(value);
        });
    } else {
      this.regInput[2] = true;
    }
  }

  constructor(private loginRegisteredService: LoginRegisteredService,
              private emitService: EmitService,
              private message: NzMessageService) { }

  ngOnInit() {
    // 接收发射过来的数据
    this.emitService.eventEmit.subscribe((value: string) => {
      console.log(value);
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
