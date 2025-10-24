import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.username, this.password)) {
      // Using Angular's Router, not Express Router
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials!';
    }
  }
}
