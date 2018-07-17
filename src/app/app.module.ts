import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChHomeComponent } from './component/course/ch-home/ch-home.component';
import { ChHomeRecommendComponent } from './component/course/ch-home-recommend/ch-home-recommend.component';
import { ChSelectionComponent } from './component/course/ch-selection/ch-selection.component';
import { ChSelectionsonComponent } from './component/course/ch-selectionson/ch-selectionson.component';
import { AppRoutingModule } from './route/app-routing.module';
import { ChLearningComponent } from './component/course/ch-learning/ch-learning.component';
import { ChCommentComponent } from './component/course/ch-comment/ch-comment.component';
import { ChNotesComponent } from './component/course/ch-notes/ch-notes.component';
import { ChQuestionComponent } from './component/course/ch-question/ch-question.component';
import { ChApeComponent } from './component/community/ch-ape/ch-ape.component';
import { ChDetailsComponent } from './component/course/ch-details/ch-details.component';
import { ChCourseChapterComponent } from './component/course/ch-course-chapter/ch-course-chapter.component';
import { ChNotesSonComponent } from './component/course/ch-notes-son/ch-notes-son.component';

@NgModule({
  declarations: [
    AppComponent,
    ChSelectionComponent,
    ChSelectionsonComponent,
    ChHomeComponent,
    ChHomeRecommendComponent,
    ChDetailsComponent,
    ChCourseChapterComponent,
    ChLearningComponent,
    ChCommentComponent,
    ChNotesComponent,
    ChQuestionComponent,
    ChApeComponent,
    ChNotesSonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
