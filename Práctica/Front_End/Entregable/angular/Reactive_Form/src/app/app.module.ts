import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormDataService } from './form-data.service';

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, UserDetailComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
