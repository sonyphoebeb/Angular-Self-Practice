import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  name = 'Sony Phoebe';
  age = 23;
  email = 'sony.phoebe@example.com';
  phone = '123-456-7890';
  address = '123 Main St, Hyderabad, Telangana, India';
  profileDetails = '';

  getProfileDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Phone: ${this.phone}, 
    Address: ${this.address}`;
  }

  showProfile() {
    this.profileDetails = this.getProfileDetails();
  }
}
