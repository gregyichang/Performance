import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdFormFieldModule 
} from '@angular/material';

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
      /****material****/
      MdAutocompleteModule,
      MdButtonModule,
      MdButtonToggleModule,
      MdCardModule,
      MdCheckboxModule,
      MdChipsModule,
      MdCoreModule,
      MdDatepickerModule,
      MdDialogModule,
      MdExpansionModule,
      MdGridListModule,
      MdIconModule,
      MdInputModule,
      MdListModule,
      MdMenuModule,
      MdNativeDateModule,
      MdPaginatorModule,
      MdProgressBarModule,
      MdProgressSpinnerModule,
      MdRadioModule,
      MdRippleModule,
      MdSelectModule,
      MdSidenavModule,
      MdSliderModule,
      MdSlideToggleModule,
      MdSnackBarModule,
      MdSortModule,
      MdTableModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule,
      MdFormFieldModule,
      /****end of material*****/
      AppRoutingModule,
  ],
  entryComponents: [studentDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
