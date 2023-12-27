import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'; 

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, UserDetailComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [UserService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
