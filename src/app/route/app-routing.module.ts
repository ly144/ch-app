import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChHomeComponent } from '../component/course/ch-home/ch-home.component';
import { ChSelectionComponent } from '../component/course/ch-selection/ch-selection.component';
import { ChLearningComponent } from '../component/course/ch-learning/ch-learning.component';
import {ChCommentComponent} from '../component/course/ch-comment/ch-comment.component';
import {ChNotesComponent} from '../component/course/ch-notes/ch-notes.component';
import {ChQuestionComponent} from '../component/course/ch-question/ch-question.component';
import {ChApeComponent} from '../component/community/ch-ape/ch-ape.component';

const ROUTES: Routes = [
  { path: '', component: ChHomeComponent },
  { path: 'home', component: ChHomeComponent },
  { path: 'selection', component: ChSelectionComponent },
  { path: 'ape', component: ChApeComponent },
  { path: 'learning', component: ChLearningComponent, children: [
      { path: '', component: ChCommentComponent },
      { path: 'comment', component: ChCommentComponent },
      { path: 'notes', component: ChNotesComponent },
      { path: 'queation', component: ChQuestionComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
