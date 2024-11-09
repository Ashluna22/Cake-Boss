import { Injectable } from '@angular/core';
import { Layer } from '../models/layer.model';

@Injectable({ providedIn: 'root' })
export class LayerService {
  private layers: Layer[] = [];

  addLayer(layer: Layer) {
    this.layers.push(layer);
  }

  deleteLayer(index: number) {
    this.layers.splice(index, 1);
  }

  getLayers() {
    return [...this.layers];
  }
}
