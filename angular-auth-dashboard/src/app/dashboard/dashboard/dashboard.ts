import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service.ts';
import { Router } from 'express';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    // Using Angular's Router, not Express Router
    this.router.navigate(['/auth/login']);
  }
}
