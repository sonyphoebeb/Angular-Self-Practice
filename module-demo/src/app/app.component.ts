import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  
}
