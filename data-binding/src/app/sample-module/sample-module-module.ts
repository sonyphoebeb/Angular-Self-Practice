import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SampleModuleModule { 
  @Input() label = 'Click Me!';
}
