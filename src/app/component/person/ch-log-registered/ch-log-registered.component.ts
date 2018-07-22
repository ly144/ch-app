import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-log-registered',
  templateUrl: './ch-log-registered.component.html',
  styleUrls: ['./ch-log-registered.component.css']
})
export class ChLogRegisteredComponent implements OnInit {

  public tips = '获取验证码';
  public disabled = false;

  isLogin = true;
  btn = ['btnAn', ''];

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





  getCode(event: any) {
    let number = 60;
    this.disabled = true;
    const that = this;
    that.tips = number + 's后重新获取';

    const timer = setInterval(function () {
      number --;
      if (number === 0) {
        that.disabled = false;
        that.tips = '获取验证码';
        clearInterval(timer);
      } else {
        that.tips = number + 's后重新获取';
      }
    }, 1000);

  }


  constructor() { }

  ngOnInit() {
  }

}
