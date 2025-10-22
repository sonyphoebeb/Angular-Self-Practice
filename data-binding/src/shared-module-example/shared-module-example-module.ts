import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../app/shared/button/button';
import { CapitalizePipe } from '../app/shared/capitalize-pipe';

@NgModule({
  declarations: [
    Button,
    Highlight,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
  ]
})

export class SharedModuleExampleModule { }
