# Angular-Self-Practice

# 🧠 Angular Practice — Data Binding (Interpolation & Property Binding)

📅 Date: 19 October 2025

📁 Folder: D:\fullstackdevelopment\angular-self-practice\data-binding-demo

🔹 1. Interpolation

📘 Definition

Interpolation is used to display dynamic data from the TypeScript class into the HTML template using double curly braces {{ }}.

Type: One-way data binding (Component ➡ Template)

🧩 Example

🧱 interpolation-example.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.css']
})
export class InterpolationExampleComponent {
  title = 'Angular Interpolation Example';
  userName = 'Sony';
  age = 22;
  currentDate = new Date();

  getWelcomeMessage() {
    return `Welcome ${this.userName}, to Angular!`;
  }
}

🧾 interpolation-example.component.html

<h2>{{ title }}</h2>

<p>User Name: {{ userName }}</p>
<p>User Age: {{ age }}</p>
<p>Current Date: {{ currentDate }}</p>

<p>{{ getWelcomeMessage() }}</p>
<p>Next Year Age: {{ age + 1 }}</p>

🧠 Key Points
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Concept</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Purpose</td>
      <td>Display dynamic data</td>
      <td>{{'{{ userName }}'}}</td>
    </tr>
    <tr>
      <td>Direction</td>
      <td>One-way (Component → Template)</td>
      <td></td>
    </tr>
    <tr>
      <td>Supports</td>
      <td>Variables, function calls, expressions</td>
      <td>{{'{{ age + 5 }}'}}</td>
    </tr>
    <tr>
      <td>Cannot Do</td>
      <td>Assign values or execute statements</td>
      <td>❌ {{'{{ age = 25 }}'}}</td>
    </tr>
  </tbody>
</table>



🔹 2. Property Binding

📘 Definition

Property Binding binds component data to HTML element properties using square brackets [ ].
Used to control attributes like src, disabled, value, etc.

Type: One-way data binding (Component ➡ DOM Property)

🧩 Example

🧱 property-binding-example.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-example',
  templateUrl: './property-binding-example.component.html',
  styleUrls: ['./property-binding-example.component.css']
})
export class PropertyBindingExampleComponent {
  title = 'Angular Property Binding Example';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  inputPlaceholder = 'Enter your name';
  isDisabled = true;

  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }
}

🧾 property-binding-example.component.html

<h2>{{ title }}</h2>

<img [src]="imageUrl" width="150" alt="Angular Logo">
<input type="text" [placeholder]="inputPlaceholder">

<!-- Button controlled by property binding -->
<button [disabled]="isDisabled">Main Button</button>

<!-- Event binding to toggle the disabled state -->
<button (click)="toggleButton()">Toggle Disabled</button>

<p>Disabled status: {{ isDisabled }}</p>

🧠 Key Points

Concept	Description	Example
Purpose	Bind component property to HTML element property	[disabled]="isDisabled"
Direction	One-way (Component → DOM)	
Common Use Cases	[src], [value], [disabled], [class], [style]	
Difference from Interpolation	Interpolation only binds text; property binding updates actual DOM properties	{{}} vs []

✅ Summary

Binding Type	Direction	Syntax	Example	Description
Interpolation	Component → Template	{{ variable }}	{{ userName }}	Displays data as text
Property Binding	Component → DOM	[property]="variable"	[disabled]="isDisabled"	Binds real DOM property





