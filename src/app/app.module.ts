import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChSelectionComponent} from './component/course/ch-selection/ch-selection.component';
import {ChSelectionsonComponent} from './component/course/ch-selectionson/ch-selectionson.component';
import {ChDetailsComponent} from './component/course/ch-details/ch-details.component';
import {ChCourseChapterComponent} from './component/course/ch-course-chapter/ch-course-chapter.component';
import {ChNotesSonComponent} from './component/course/ch-notes-son/ch-notes-son.component';


@NgModule({
  declarations: [
    AppComponent,
    ChSelectionComponent,
    ChSelectionsonComponent,
    ChDetailsComponent,
    ChCourseChapterComponent,
    ChNotesSonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
