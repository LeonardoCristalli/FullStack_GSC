import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrillaComponent } from './grilla/grilla.component';
import { CeldaComponent } from './celda/celda.component';

@NgModule({
  declarations: [AppComponent, GrillaComponent, CeldaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
