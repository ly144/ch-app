import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ChLearningComponent} from '../component/course/ch-learning/ch-learning.component';
import {EmitService} from '../service/emit.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<ChLearningComponent> {
  canDeactivate(component: ChLearningComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.emitService.eventEmit.emit('leaveLearning');
    return true;
  }

  constructor(private emitService: EmitService) { }
}
