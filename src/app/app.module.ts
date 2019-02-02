import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Report1Module } from './report1/report1.module';
import { Report2Module } from './report2/report2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Report1Module,
    Report2Module
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
