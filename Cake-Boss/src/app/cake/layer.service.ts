import { Injectable } from '@angular/core';
import { CakeLayer, CakeColor } from './cake.component';

@Injectable({
  providedIn: 'root'
})
export class LayerService {
  private layers: CakeLayer[] = [];

  getLayers(): CakeLayer[] {
    return this.layers;
  }

  addLayer(layer: CakeLayer): void {
    // Validate layer properties
    if (layer.height < 0.5 || layer.height > 10) {
      throw new Error('Layer height must be between 0.5 and 10 inches');
    }
    if (layer.width < 1 || layer.width > 10) {
      throw new Error('Layer width must be between 1 and 10 inches');
    }
    this.layers.push(layer);
  }

  deleteLayer(index: number): void {
    if (index >= 0 && index < this.layers.length) {
      this.layers.splice(index, 1);
    }
  }
} 