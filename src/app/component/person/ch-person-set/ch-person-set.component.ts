import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { PersonService } from '../../../service/person.service';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {URL} from '../../../models/uploadUrl';

@Component({
  selector: 'app-ch-person-set',
  templateUrl: './ch-person-set.component.html',
  styleUrls: ['./ch-person-set.component.css']
})
export class ChPersonSetComponent implements OnInit {

  userId = +localStorage.getItem('userId');
  // userId = 3;
  // 用户信息
  person: Person;
  // 邮箱
  email = '';
  // 邮箱验证码
  emailCode = '';
  // 手机号码
  phone = '';
  // 短信验证码
  phoneCode = '';
  // 修改密码
  pass = ['', '', '', '', ''];
  // 密码验证
  userLogin = {'username': '', 'password': '', 'code': ''};
  // 是否身份验证
  isjudge = true;
  // 上传图片
  nzAction = URL + '/uploadfile/uploadimg';
  fileList = [];
  previewVisible = false;
  previewImage = '';

  isEmailVisible = false;
  isPhoneVisible = false;
  isSetVisible = false;
  isPassVisible = false;
  isPasswordVisible = false;

  // 绑定邮箱模态框
  showEmailModal(): void {
    if (this.person.email === null || this.isjudge === true) {
      this.isEmailVisible = true;
    } else {
      this.isPasswordVisible = true;
    }
  }
  emailOk(): void {
    this.personService.judgeCode(this.email + '@qq.com', this.emailCode, this.userId)
      .subscribe((value: number) => {
        if (value > 0) {
          this.message.success('绑定成功');
          this.isEmailVisible = false;
        } else {
          this.message.error('绑定失败');
        }
      });
  }
  emailCancel(): void {
    this.isEmailVisible = false;
  }

  // 绑定手机模态框
  showPhoneModal(): void {
    if (this.person.phone === null || this.isjudge === true) {
      this.isPhoneVisible = true;
    } else {
      this.isPasswordVisible = true;
    }
  }
  phoneOk(): void {
    this.personService.judgeCode(this.phone, this.phoneCode, this.userId)
      .subscribe((value: number) => {
        if (value > 0) {
          this.message.success('绑定成功');
          this.isPhoneVisible = false;
        } else {
          this.message.error('绑定失败');
        }
      });
  }
  phoneCancel(): void {
    this.isPhoneVisible = false;
  }

  // 修改模态框
  showSetModal(): void {
    this.isSetVisible = true;
  }
  setOk(): void {
    this.person.id = this.userId;
    this.personService.changePerson(this.person)
      .subscribe((value: number) => {
        if (value > 0) {
          this.message.success('修改成功');
          this.isSetVisible = false;
        } else {
          this.message.error('修改失败');
        }
      });
  }
  setCancel(): void {
    this.isSetVisible = false;
  }

  // 修改密码模态框
  showPassModal(): void {
    this.isPassVisible = true;
  }
  passOk(): void {
    this.pass[3] = this.person.name;
    this.pass[4] = this.userId + '';
    if (this.pass[1] === this.pass[2]) {
      this.personService.changePass(this.pass)
        .subscribe((value: number) => {
          if (value > 0) {
            this.message.success('修改成功');
            this.isPassVisible = false;
          } else {
            this.message.error('修改失败');
          }
        });
    } else {
      this.message.error('密码不相同');
    }
  }
  passCancel(): void {
    this.isPassVisible = false;
  }

  // 验证身份模态框
  passwordOk(): void {
    this.pass[3] = this.person.name;
    if (this.pass[1] === this.pass[2]) {
      this.personService.changePass(this.pass)
        .subscribe((value: number) => {
          if (value > 0) {
            this.message.success('修改成功');
            this.isPasswordVisible = false;
          } else {
            this.message.error('修改失败');
          }
        });
    } else {
      this.message.error('密码不相同');
    }
  }
  passwordCancel(): void {
    this.isPasswordVisible = false;
  }



  // 发送邮件
  sendEmail() {
    this.personService.sendEmail(this.email + '@qq.com')
      .subscribe((value: number) => {
        if (value > 0) {
          this.message.success('发送成功');
        } else {
          this.message.error('发送失败');
        }
      });
  }

  // 发送短信
  sendCode() {
    this.personService.sendCode(this.phone)
      .subscribe((value: number) => {
        if (value > 0) {
          this.message.success('发送成功');
        } else {
          this.message.error('发送失败');
        }
      });
  }

  init() {
    this.personService.personInit(this.userId)
      .subscribe((value: Person) => {
        this.person = value;
        console.log(this.person);
        this.fileList = [{url: this.person.picture}];
      });
  }

  constructor(private personService: PersonService,
              private message: NzMessageService) { }

  ngOnInit() {
    this.init();
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  // 上传文件的回调，开始、上传进度、完成、失败都会调用这个函数。
  handleChange(info: any): void {
    if (info.file.response) {
      info.file.url = info.file.response.picture;
      console.log(info.file.response.picture);
      this.person.picture = info.file.response.picture;
    }
  }

}
