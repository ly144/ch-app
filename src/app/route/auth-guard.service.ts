import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {EmitService} from '../service/emit.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate() {
    if (localStorage.getItem('token') === null && localStorage.getItem('userId') !== '0') {
      console.log('未登录');
      this.emitService.eventEmit.emit('login');
      return false;
    }
    console.log('登录' + localStorage.getItem('token') + +localStorage.getItem('userId'));
    // localStorage.removeItem('token');
    return true;
  }

  constructor(private emitService: EmitService) { }
}
