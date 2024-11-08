// src/app/app.component.ts
import { Component } from '@angular/core';
import { CakeBuilderComponent } from './cake-builder/cake-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CakeBuilderComponent],  // Directly import standalone component
  template: '<app-cake-builder></app-cake-builder>',
})
export class AppComponent {}
