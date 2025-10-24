import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { authGuard } from './auth/auth.guard.ts';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
];
