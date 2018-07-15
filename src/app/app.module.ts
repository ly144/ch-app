import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChSelectionComponent} from './component/course/ch-selection/ch-selection.component';
import {ChSelectionsonComponent} from './component/course/ch-selectionson/ch-selectionson.component';

@NgModule({
  declarations: [
    AppComponent,
    ChSelectionComponent,
    ChSelectionsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
