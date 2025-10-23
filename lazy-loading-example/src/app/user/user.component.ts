import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'User Profile';
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: new Date('2023-01-15')
  };
}
