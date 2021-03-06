import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
/** 组件 **/
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
import { ChHeaderComponent } from './component/header&footer/ch-header/ch-header.component';
import { ChPersonComponent } from './component/person/ch-person/ch-person.component';
import { ChPersonCourseComponent } from './component/person/ch-person-course/ch-person-course.component';
import { ChPersonNotesComponent } from './component/person/ch-person-notes/ch-person-notes.component';
import { ChPersonApeComponent } from './component/person/ch-person-ape/ch-person-ape.component';
import { ChPersonSetComponent } from './component/person/ch-person-set/ch-person-set.component';
import { ChBacktageHomeBComponent } from './component/backstage/ch-backtage-home-b/ch-backtage-home-b.component';
import { ChBackstageAddCourseComponent } from './component/backstage/ch-backstage-add-course/ch-backstage-add-course.component';
import { ChBackstageAddChapterComponent } from './component/backstage/ch-backstage-add-chapter/ch-backstage-add-chapter.component';
import { ChBackstageAddSectionComponent } from './component/backstage/ch-backstage-add-section/ch-backstage-add-section.component';
import { ChFooterComponent } from './component/header&footer/ch-footer/ch-footer.component';
/** 服务组件 **/
import { LoginRegisteredService } from './service/login-registered.service';
import { HomeService} from './service/home.service';
import { EmitService } from './service/emit.service';
import { PersonService } from './service/person.service';
import { CourseService } from './service/course.service';
import { BackstageService } from './service/backstage.service';
import { ApeService } from './service/ape.service';
import { ChApeQuizComponent } from './component/community/ch-ape-quiz/ch-ape-quiz.component';
import { ChQuestionSonComponent } from './component/course/ch-question-son/ch-question-son.component';
import { QuillModule } from 'ngx-quill';
import { AuthGuardService } from './route/auth-guard.service';
import { CanDeactivateGuardService } from './route/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ChHomeComponent,
    ChHomeRecommendComponent,
    ChSelectionComponent,
    ChSelectionsonComponent,
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
    ChBackstageHomeComponent,
    ChHeaderComponent,
    ChPersonComponent,
    ChPersonCourseComponent,
    ChPersonNotesComponent,
    ChPersonApeComponent,
    ChPersonSetComponent,
    ChBacktageHomeBComponent,
    ChBackstageAddCourseComponent,
    ChBackstageAddChapterComponent,
    ChBackstageAddSectionComponent,
    ChFooterComponent,
    ChApeQuizComponent,
    ChQuestionSonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    QuillModule,
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    LoginRegisteredService,
    HomeService,
    EmitService,
    PersonService,
    CourseService,
    ApeService,
    BackstageService,
    AuthGuardService,
    CanDeactivateGuardService,
  ]
})
export class AppModule { }
