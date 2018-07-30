import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChHomeComponent } from '../component/course/ch-home/ch-home.component';
import { ChSelectionComponent } from '../component/course/ch-selection/ch-selection.component';
import { ChLearningComponent } from '../component/course/ch-learning/ch-learning.component';
import { ChPersonComponent} from '../component/person/ch-person/ch-person.component';
import { ChPersonCourseComponent } from '../component/person/ch-person-course/ch-person-course.component';
import { ChPersonNotesComponent } from '../component/person/ch-person-notes/ch-person-notes.component';
import { ChPersonApeComponent} from '../component/person/ch-person-ape/ch-person-ape.component';
import { ChPersonSetComponent} from '../component/person/ch-person-set/ch-person-set.component';
import { ChCommentComponent } from '../component/course/ch-comment/ch-comment.component';
import { ChNotesComponent } from '../component/course/ch-notes/ch-notes.component';
import { ChQuestionComponent } from '../component/course/ch-question/ch-question.component';
import { ChApeComponent } from '../component/community/ch-ape/ch-ape.component';
import { ChNotesSonComponent } from '../component/course/ch-notes-son/ch-notes-son.component';
import { ChDetailsComponent } from '../component/course/ch-details/ch-details.component';
import { ChCourseChapterComponent } from '../component/course/ch-course-chapter/ch-course-chapter.component';
import { ChLogRegisteredComponent } from '../component/person/ch-log-registered/ch-log-registered.component';
import { ChCommunityComponent } from '../component/community/ch-community/ch-community.component';
import { ChBackstageHomeComponent } from '../component/backstage/ch-backstage-home/ch-backstage-home.component';
import { ChBacktageHomeBComponent } from '../component/backstage/ch-backtage-home-b/ch-backtage-home-b.component';

const ROUTES: Routes = [
  { path: '', component: ChHomeComponent },
  { path: 'home', component: ChHomeComponent },
  { path: 'selection', component: ChSelectionComponent },
  { path: 'details/:id', component: ChDetailsComponent, children: [
      { path: '', component: ChCourseChapterComponent },
      { path: 'chapter', component: ChCourseChapterComponent },
      { path: 'comment', component: ChCommentComponent },
      { path: 'notes', component: ChNotesComponent },
      { path: 'question', component: ChQuestionComponent }
    ]},
  { path: 'learning/:id', component: ChLearningComponent, children: [
      { path: '', component: ChQuestionComponent },
      { path: 'comment', component: ChCommentComponent },
      { path: 'notes', component: ChNotesComponent },
      { path: 'question', component: ChQuestionComponent }
    ]},
  { path: 'logReg', component: ChLogRegisteredComponent },
  { path: 'ape', component: ChApeComponent },
  { path: 'community', component: ChCommunityComponent },
  { path: 'notesSon', component: ChNotesSonComponent },
  { path: 'person', component: ChPersonComponent, children: [
      { path: '', component: ChPersonCourseComponent },
      { path: 'person-course', component: ChPersonCourseComponent },
      { path: 'person-notes', component: ChPersonNotesComponent },
      { path: 'person-ape', component: ChPersonApeComponent},
      { path: 'person-set', component: ChPersonSetComponent},
    ]},
  { path: 'backstageA', component: ChBackstageHomeComponent },
  { path: 'backstageB', component: ChBacktageHomeBComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
