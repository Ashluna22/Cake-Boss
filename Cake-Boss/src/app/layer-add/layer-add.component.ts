// src/app/layer-add/layer-add.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { LayerFormComponent } from '../layer-form/layer-form.component';

@Component({
  selector: 'app-layer-add',
  standalone: true,
  imports: [LayerFormComponent], // Import the standalone LayerFormComponent here
  template: `
    <button (click)="toggleForm()">Add Layer</button>
    <app-layer-form *ngIf="showForm" (save)="onSave($event)" (cancel)="toggleForm()"></app-layer-form>
  `,
})
export class LayerAddComponent {
  @Output() addLayer = new EventEmitter<any>();
  showForm = false;

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSave(layer: any): void {
    this.addLayer.emit(layer);
    this.toggleForm();
  }
}

