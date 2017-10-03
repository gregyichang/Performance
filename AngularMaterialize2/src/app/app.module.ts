import { BrowserModule }    from '@angular/platform-browser';
import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { MaterializeModule } from 'ng2-materialize';


import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { form1Component }   from './form1.component';
import { form2Component }   from './form2.component';
import { studentComponent }   from './student.component';
import { studentDetailComponent } from './studentDetail.Component';

@NgModule({
  declarations: [
      AppComponent,
      form1Component,
      form2Component,
      studentComponent,
      studentDetailComponent
  ],
  imports: [
      /****angular****/
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,

      //MaterializeModule.forRoot()
  ],
  //entryComponents: [studentDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
