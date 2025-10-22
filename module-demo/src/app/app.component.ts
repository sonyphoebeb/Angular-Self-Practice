import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Profile } from './user/profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Welcome, Profile],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  
}
  