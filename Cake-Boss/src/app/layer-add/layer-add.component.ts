// src/app/layeradd/layeradd.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Layer } from '../models/layer.model';  // Import the Layer interface

@Component({
    selector: 'app-layer-add',
    template: `
        <button (click)="toggleForm()">Add Layer</button>
        <app-layer-form *ngIf="showForm" (save)="onSave($event)" (cancel)="toggleForm()"></app-layer-form>
    `
})
export class LayerAddComponent {
    @Output() addLayer = new EventEmitter<Layer>();
    showForm = false;

    toggleForm(): void {
        this.showForm = !this.showForm;
    }

    onSave(layer: Layer): void {
        this.addLayer.emit(layer);
        this.toggleForm();
    }
}
