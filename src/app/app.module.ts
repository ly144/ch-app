import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChHomeComponent } from './ch-home/ch-home.component';
import { ChHomeRecommendComponent } from './ch-home-recommend/ch-home-recommend.component';

@NgModule({
  declarations: [
    AppComponent,
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
