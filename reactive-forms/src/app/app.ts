import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Reactive Forms Example';

  // Create main form group
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$')
      ])
    }),
    hobbies: new FormArray([]) // Dynamic form section
  });

  // Getter for hobbies array
  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  // Add / remove hobbies
  addHobby() {
    this.hobbies.push(new FormControl('', Validators.required));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  // Handle form submit
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('✅ Form submitted successfully!');
    } else {
      alert('⚠️ Please fix the validation errors.');
    }
  }
}
