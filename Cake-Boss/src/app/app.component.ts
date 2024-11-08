// src/app/app.component.ts
import { Component } from '@angular/core';
import { LayerFormComponent } from './layer-form/layer-form.component';
import { LayerAddComponent } from './layer-add/layer-add.component';
import { LayerBuilderComponent } from './layer-builder/layer-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Marks this component as standalone
  imports: [
    LayerFormComponent,
    LayerAddComponent,
    LayerBuilderComponent
  ],
  template: `
    <h1>Welcome to Cake Builder</h1>
    <app-layer-add></app-layer-add>
    <app-layer-form></app-layer-form>
    <app-layer-builder></app-layer-builder>
  `,
})
export class AppComponent {}
