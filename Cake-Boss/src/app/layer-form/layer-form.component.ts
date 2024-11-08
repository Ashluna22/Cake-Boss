import { Component, EventEmitter, Output } from '@angular/core';
import { Layer } from '../models/layer.model';

@Component({
  selector: 'app-layer-form',
  template: `
    <form (ngSubmit)="onSave()">
      <input type="number" [(ngModel)]="height" placeholder="Height" min="0.5" max="10" required>
      <input type="number" [(ngModel)]="width" placeholder="Width" min="1" max="10" required>
      <select [(ngModel)]="color">
        <option *ngFor="let color of colors" [value]="color">{{ color }}</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" (click)="onCancel()">Cancel</button>
    </form>
  `,
})
export class LayerFormComponent {
  @Output() save = new EventEmitter<Layer>();
  @Output() cancel = new EventEmitter<void>();

  height = 1;
  width = 1;
  color = 'red';
  colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  onSave(): void {
    this.save.emit({ height: this.height, width: this.width, color: this.color });
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
