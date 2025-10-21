import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component';  // Correct component name and path
import { Welcome } from './welcome/welcome';
import { UserModule } from './user/user-module';

@NgModule({
  declarations: [
    App,  // Use the correct class name here
  ],
  imports: [
    BrowserModule,
    Welcome,
    UserModule
  ],
  providers: [],
  bootstrap: [App]  // Root component
})
export class AppModule { }
