import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css'
})
export class Interpolation {

title = 'Interpolation';
empName = 'Sony Phoebe';
empId = 1078261;
company = 'Tech Mahindra';

getWelcomeMessage() {
  return `Hi ${this.empName}! Welcome to Angular!`;
}

}
