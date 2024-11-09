// src/app/layer-builder/layer-builder.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Layer } from '../models/layer.model';

@Component({
  selector: 'app-layer-builder',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule for ngModel
  template: `
    <div class="layer-builder">
      <label>Color: <input type="color" [(ngModel)]="layer.color"></label>
      <label>Width: <input type="range" [(ngModel)]="layer.width" min="1" max="10"></label>
      <label>Height: <input type="range" [(ngModel)]="layer.height" min="0.5" max="10" step="0.5"></label>
      <button (click)="delete.emit()">Delete</button>
    </div>
  `,
})
export class LayerBuilderComponent {
  @Input() layer!: Layer;
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<Layer>();
}
