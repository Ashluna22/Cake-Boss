// src/app/layerbuilder/layerbuilder.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Layer } from '../models/layer.model';

@Component({
    selector: 'app-layer-builder',
    template: `
        <div class="layer-builder">
            <p>Height: {{ layer.height }}</p>
            <p>Width: {{ layer.width }}</p>
            <p>Color: {{ layer.color }}</p>
            <button (click)="onDelete()">Delete</button>
        </div>
    `,
    styles: ['.layer-builder { border: 1px solid #ccc; padding: 1em; margin-bottom: 1em; }']
})
export class LayerBuilderComponent {
    @Input() layer!: Layer;
    @Output() delete = new EventEmitter<void>();

    onDelete(): void {
        this.delete.emit();
    }
}
