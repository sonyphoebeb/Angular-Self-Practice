import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  title = 'Angular Property Binding';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  inputPlaceholder = 'Enter your name';
  isDisabled = true;
  buttonLabel = 'Click Me!';
}
