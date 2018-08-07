import { EventEmitter, Injectable } from '@angular/core';

export class Info {
  name: string;
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class EmitService {
  courseId: number;
  info: Info;
  public eventEmit: any;

  constructor() {
    // 定义发射事件
    this.eventEmit = new EventEmitter();
  }
}
