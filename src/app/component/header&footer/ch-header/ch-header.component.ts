import {Component, OnInit} from '@angular/core';
import {EmitService} from '../../../service/emit.service';
import {ChLogRegisteredComponent} from '../../person/ch-log-registered/ch-log-registered.component';
import {LoginRegisteredService} from '../../../service/login-registered.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ch-header',
  templateUrl: './ch-header.component.html',
  styleUrls: ['./ch-header.component.css']
})
export class ChHeaderComponent implements OnInit {

  imgSrc = '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  isLogin = false;
  isLearning = false;
  isRoot = 0;

  // 搜索
  findByName: string;

  onFindByName() {
    if (this.findByName !== null) {
      this.emitService.eventEmitFind.emit(this.findByName);
    }
  }


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

  loginOut() {
    this.isLogin = false;
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

  constructor(private emitService: EmitService,
              private login: LoginRegisteredService,
              private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('userId') === null) {
      localStorage.setItem('userId', '0');
    } else if (+localStorage.getItem('userId') !== 0) {
      this.login.getPicture(+localStorage.getItem('userId'))
        .subscribe((img: { success: boolean, root: number, picture: string }) => {
          this.imgSrc = img.picture;
          this.isRoot = img.root;
        });
      this.isLogin = true;
    }

    this.emitService.eventEmit.subscribe((value: string) => {
        if (value === 'loginSuccess') {
          this.login.getPicture(+localStorage.getItem('userId'))
            .subscribe((img: { success: boolean, root: number, picture: string }) => {
              this.imgSrc = img.picture;
              this.isRoot = img.root;
            });
          this.isLogin = true;
        } else if (value === 'learning') {
          this.isLearning = true;
        } else if (value === 'leaveLearning') {
          this.isLearning = false;
        }
    });
  }

}
