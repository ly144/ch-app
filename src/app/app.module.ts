import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChHomeComponent } from './ch-home/ch-home.component';
import { ChHomeRecommendComponent } from './ch-home-recommend/ch-home-recommend.component';
import {ChSelectionComponent} from './component/course/ch-selection/ch-selection.component';
import {ChSelectionsonComponent} from './component/course/ch-selectionson/ch-selectionson.component';

@NgModule({
  declarations: [
    AppComponent,
    ChSelectionComponent,
    ChSelectionsonComponent,
    ChHomeComponent,
    ChHomeRecommendComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
