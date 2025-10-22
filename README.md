
# 🧠 Angular — Data Binding (Interpolation & Property Binding)

<b>📅 Date: 20 October 2025 </b> 

<b>📁 Folder:</b> D:\fullstackdevelopment\angular-self-practice\data-binding

<h2> 1. Interpolation </h2> 

<b>📘 Definition </b>

Interpolation is used to display dynamic data from the TypeScript class into the HTML template using double curly braces {{ }}.

Type: One-way data binding (Component ➡ Template)

<b> 🧩 Example </b>

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

<b> 🧠 Key Points </b>

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

<br>
<h2>2. Property Binding </h2> 

<b>📘 Definition </b>

Property Binding binds component data to HTML element properties using square brackets [ ].
Used to control attributes like src, disabled, value, etc.

Type: One-way data binding (Component ➡ DOM Property)

<b> 🧩 Example </b>

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

<b> 🧠 Key Points </b>

<table border="1" cellpadding="5" cellspacing="0">
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
      <td>Bind component property to HTML element property</td>
      <td>[disabled]="isDisabled"</td>
    </tr>
    <tr>
      <td>Direction</td>
      <td>One-way (Component → DOM)</td>
      <td></td>
    </tr>
    <tr>
      <td>Common Use Cases</td>
      <td>[src], [value], [disabled], [class], [style]</td>
      <td></td>
    </tr>
    <tr>
      <td>Difference from Interpolation</td>
      <td>Interpolation only binds text; property binding updates actual DOM properties</td>
      <td>{{}} vs []</td>
    </tr>
  </tbody>
</table>

<br>
<h2> ✅ Summary </h2> 

<table border="1" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <th>Binding Type</th>
      <th>Direction</th>
      <th>Syntax</th>
      <th>Example</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Interpolation</td>
      <td>Component → Template</td>
      <td>{{ variable }}</td>
      <td>{{ userName }}</td>
      <td>Displays data as text</td>
    </tr>
    <tr>
      <td>Property Binding</td>
      <td>Component → DOM</td>
      <td>[property]="variable"</td>
      <td>[disabled]="isDisabled"</td>
      <td>Binds real DOM property</td>
    </tr>
  </tbody>
</table>


<br>
# 🧠 Angular — Data Binding (Interpolation & Property Binding)

<b>📅 Date: 20 October 2025 </b> 

🚀 Angular Feature & Shared Modules Demo
📖 Overview

This project demonstrates Feature Modules and Shared Modules in Angular.
It’s built using Angular CLI and follows NgModule-based architecture for clean, modular code.

✨ Key Features

🏠 Root Module (AppModule) – Bootstraps the application

👤 Feature Module (UserModule) – Contains user-related components (ProfileComponent)

🛠️ Shared Module (SharedModuleExampleModule) – Reusable components, directives, and pipes (ButtonComponent, HighlightDirective, CapitalizePipe)

🌐 Routing – Feature module routes for /profile

🔁 Reusability – Shared components usable across multiple modules

📂 Folder Structure
src/
 ├── app/
 │    ├── app.module.ts
 │    ├── app.component.ts
 │    ├── app.component.html
 │    ├── app-routing.module.ts
 │    ├── user/
 │    │     ├── user.module.ts
 │    │     └── profile/
 │    │           ├── profile.component.ts
 │    │           ├── profile.component.html
 │    │           └── profile.component.css
 │    └── shared-module-example/
 │          ├── shared-module-example-module.ts
 │          └── button/
 │               ├── button.component.ts
 │               └── button.component.html

⚡ Setup Instructions

Clone the repo

git clone <your-repo-url>
cd module-demo


Install dependencies

npm install


Run the development server

ng serve


Open the app in browser

http://localhost:4200


🖥️ See the main app header

👤 Go to /profile to view ProfileComponent with a reusable ButtonComponent

🛠️ How It Works
Feature Module (UserModule)

Contains ProfileComponent

Imports SharedModuleExampleModule for reusable components

Defines its own routes with RouterModule.forChild()

Shared Module (SharedModuleExampleModule)

Declares reusable components, directives, and pipes

Exports them for use in feature modules

Includes CommonModule & FormsModule

AppModule

Root module that imports UserModule

Bootstraps AppComponent

Contains <router-outlet> for routing

💡 Example Usage

Using Shared Button:

<app-button label="Show Details"></app-button>


Highlight Directive:

<p appHighlight="lightblue">Hover me! ✨</p>


Capitalize Pipe:

<p>{{ 'angular demo' | capitalize }}</p>

⚙️ Commands
# Serve the app
ng serve

# Build for production
ng build --prod

# Run tests
ng test

📝 Notes

All components are NgModule-based ✅

Import SharedModuleExampleModule in any feature module that uses shared components 🔁

💻 Dependencies

Angular CLI: 18+

Node.js: 20+

npm: 11+


