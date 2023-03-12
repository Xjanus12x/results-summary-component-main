import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryService } from './summary/summary.service';
@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
