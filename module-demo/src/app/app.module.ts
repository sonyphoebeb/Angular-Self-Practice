import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component';  // Correct component name and path

@NgModule({
  declarations: [
    App  // Use the correct class name here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App]  // Root component
})
export class AppModule { }
