import { Component, Input } from '@angular/core';
import { CapitalizePipe } from '../capitalize-pipe';

@Component({
  selector: 'app-button',
  imports: [CapitalizePipe],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label = 'Click Me';
}
