import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../app/shared/button/button';
import { CapitalizePipe } from '../app/shared/capitalize-pipe';
import { Highlight } from '../app/shared/highlight';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    Button,
    Highlight,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    Button,
    Highlight,
    CapitalizePipe
  ]
})
export class SharedModuleExampleModule { }
