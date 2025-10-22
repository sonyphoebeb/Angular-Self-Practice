import { Interpolation } from './interpolation/interpolation';
import { Component, signal } from '@angular/core';
import { PropertyBinding } from './property-binding/property-binding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Interpolation, PropertyBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding');
}
