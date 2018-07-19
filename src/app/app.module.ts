import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

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
import { ChLogRegisteredComponent } from './component/person/ch-log-registered/ch-log-registered.component';
import { ChCommunityComponent } from './component/community/ch-community/ch-community.component';
import { ChBackstageHomeComponent } from './component/backstage/ch-backstage-home/ch-backstage-home.component';

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
    ChNotesSonComponent,
    ChLogRegisteredComponent,
    ChCommunityComponent,
    ChBackstageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class AppModule { }
