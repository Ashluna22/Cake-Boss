import { Injectable } from '@angular/core';
import { CakeLayer } from '../models/layer.model';

@Injectable({ providedIn: 'root' })

export class LayerService {
  private layers: CakeLayer[] = [];

  addLayer(layer: CakeLayer) {
    this.layers.push(layer);
  }

  deleteLayer(index: number) {
    this.layers.splice(index, 1);
  }

  getLayers() {
    return [...this.layers];
  }
}
