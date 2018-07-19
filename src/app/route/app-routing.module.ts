import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChHomeComponent } from '../component/course/ch-home/ch-home.component';
import { ChSelectionComponent } from '../component/course/ch-selection/ch-selection.component';
import { ChLearningComponent } from '../component/course/ch-learning/ch-learning.component';
import {ChNotesSonComponent} from '../component/course/ch-notes-son/ch-notes-son.component';
import {ChPersonComponent} from '../component/person/ch-person/ch-person.component';
import {ChPersonCourseComponent} from '../component/person/ch-person-course/ch-person-course.component';
import {ChPersonNotesComponent} from '../component/person/ch-person-notes/ch-person-notes.component';
import {ChPersonApeComponent} from '../component/person/ch-person-ape/ch-person-ape.component';
import {ChPersonSetComponent} from '../component/person/ch-person-set/ch-person-set.component';


const ROUTES: Routes = [
  { path: '', component: ChHomeComponent },
  { path: 'home', component: ChHomeComponent },
  { path: 'selection', component: ChSelectionComponent },
  { path: 'learning', component: ChLearningComponent },
  { path: 'notesSon', component: ChNotesSonComponent },
  { path: 'person', component: ChPersonComponent, children: [
      { path: '', component: ChPersonCourseComponent },
      { path: 'person-course', component: ChPersonCourseComponent },
      { path: 'person-notes', component: ChPersonNotesComponent },
      { path: 'person-ape', component: ChPersonApeComponent},
      { path: 'person-set', component: ChPersonSetComponent},
    ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
