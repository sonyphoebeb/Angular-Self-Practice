import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component';  // Correct component name and path
import { Welcome } from './welcome/welcome';

@NgModule({
  declarations: [
    App,  // Use the correct class name here
  ],
  imports: [
    BrowserModule,
    Welcome
  ],
  providers: [],
  bootstrap: [App]  // Root component
})
export class AppModule { }
