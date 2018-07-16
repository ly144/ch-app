import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChHomeComponent } from '../component/course/ch-home/ch-home.component';
import { ChSelectionComponent } from '../component/course/ch-selection/ch-selection.component';
import { ChLearningComponent } from '../component/course/ch-learning/ch-learning.component';

const ROUTES: Routes = [
  { path: '', component: ChHomeComponent },
  { path: 'home', component: ChHomeComponent },
  { path: 'selection', component: ChSelectionComponent },
  { path: 'learning', component: ChLearningComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
