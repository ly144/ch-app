import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChHomeComponent } from '../component/course/ch-home/ch-home.component';
import { ChSelectionComponent } from '../component/course/ch-selection/ch-selection.component';
import { ChLearningComponent } from '../component/course/ch-learning/ch-learning.component';
import { ChCommentComponent } from '../component/course/ch-comment/ch-comment.component';
import { ChNotesComponent } from '../component/course/ch-notes/ch-notes.component';
import { ChQuestionComponent } from '../component/course/ch-question/ch-question.component';
import { ChApeComponent } from '../component/community/ch-ape/ch-ape.component';
import { ChNotesSonComponent } from '../component/course/ch-notes-son/ch-notes-son.component';
import {ChDetailsComponent} from '../component/course/ch-details/ch-details.component';
import {ChCourseChapterComponent} from '../component/course/ch-course-chapter/ch-course-chapter.component';
import {ChLogRegisteredComponent} from '../component/person/ch-log-registered/ch-log-registered.component';
import {ChCommunityComponent} from '../component/community/ch-community/ch-community.component';

const ROUTES: Routes = [
  { path: '', component: ChHomeComponent },
  { path: 'home', component: ChHomeComponent },
  { path: 'selection', component: ChSelectionComponent },
  { path: 'ape', component: ChApeComponent },
  { path: 'details', component: ChDetailsComponent, children: [
      { path: '', component: ChCourseChapterComponent },
      { path: 'chapter', component: ChCourseChapterComponent },
      { path: 'comment', component: ChCommentComponent },
      { path: 'notes', component: ChNotesComponent },
      { path: 'question', component: ChQuestionComponent }
    ]},
  { path: 'learning', component: ChLearningComponent, children: [
      { path: '', component: ChQuestionComponent },
      { path: 'comment', component: ChCommentComponent },
      { path: 'notes', component: ChNotesComponent },
      { path: 'question', component: ChQuestionComponent }
    ]},
  { path: 'notesSon', component: ChNotesSonComponent},
  { path: 'logReg', component: ChLogRegisteredComponent },
  { path: 'community', component: ChCommunityComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
