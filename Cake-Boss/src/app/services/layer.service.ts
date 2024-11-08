// src/app/services/layer.service.ts
import { Injectable } from '@angular/core';
import { Layer } from '../models/layer.model';

@Injectable({
    providedIn: 'root',
})
export class LayerService {
    private layers: Layer[] = [];

    addLayer(layer: Layer): void {
        this.layers.push(layer);
    }

    deleteLayer(index: number): void {
        this.layers.splice(index, 1);
    }

    getLayers(): Layer[] {
        return [...this.layers];
    }
}
