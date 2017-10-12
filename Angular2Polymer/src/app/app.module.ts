import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {Form1Component} from './form1/form1.component';
import {Form2Component} from './form2/form2.component';
import { StudentEntryComponent } from './student-entry/studentEntry.component';
import { StudentDetailComponent } from './student-detail/studentDetail.component';
import { PolymerModule } from '@codebakery/origami';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    StudentEntryComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PolymerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
