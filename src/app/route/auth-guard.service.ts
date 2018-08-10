import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { EmitService } from '../service/emit.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  canActivateChild() {
    if (localStorage.getItem('token') === null || localStorage.getItem('userId') === '0') {
      console.log('未登录');
      this.emitService.eventEmit.emit('login');
      return false;
    }
    console.log('登录' + localStorage.getItem('userId'));
    return true;
  }

  canActivate() {
    if (localStorage.getItem('token') === null || localStorage.getItem('userId') === '0') {
      console.log('未登录');
      this.emitService.eventEmit.emit('login');
      return false;
    }
    console.log('登录' + localStorage.getItem('userId'));
    return true;
  }

  constructor(private emitService: EmitService) { }
}
