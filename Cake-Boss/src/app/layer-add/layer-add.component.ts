// src/app/layer-add/layer-add.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layer-add',
  standalone: true,  // Mark as standalone
  imports: [CommonModule, FormsModule],  // Import necessary modules
  template: `
    <button (click)="toggleForm()">Add A Layer</button>
    <div *ngIf="showForm">
      <input [(ngModel)]="newLayer.color" type="color">
      <input [(ngModel)]="newLayer.width" type="range" min="1" max="10">
      <input [(ngModel)]="newLayer.height" type="range" min="0.5" max="10" step="0.5">
      <button (click)="submitLayer()">Add</button>
    </div>
  `,
})
export class LayerAddComponent {
  @Output() addLayer = new EventEmitter<any>();
  showForm = false;
  newLayer = { color: '#ffffff', width: 5, height: 5 };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitLayer() {
    this.addLayer.emit({ ...this.newLayer });
    this.toggleForm();
  }
}
