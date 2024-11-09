// src/app/cake-builder/cake-builder.component.ts
import { Component } from '@angular/core';
import { Layer } from '../models/layer.model';
import { LayerService } from '../services/layer.service';
import { LayerAddComponent } from '../layer-add/layer-add.component';
import { LayerBuilderComponent } from '../layer-builder/layer-builder.component';
import { CakeComponent } from '../cake/cake.component';

@Component({
  selector: 'app-cake-builder',
  template: `
    <div class="builder-container">
      <div class="builder-panel">
        <h3>Add A Layer</h3>
        <app-layer-add (addLayer)="addLayer($event)"></app-layer-add>
        
        <div *ngFor="let layer of layers; let i = index" class="layer-controls">
          <app-layer-builder
            [layer]="layer"
            (delete)="deleteLayer(i)"
            (update)="updateLayer(i, $event)">
          </app-layer-builder>
        </div>
      </div>
      
      <div class="cake-preview">
        <app-cake [layers]="layers"></app-cake>
      </div>
    </div>
  `,
  styleUrls: ['./cake-builder.component.css'],
  imports: [LayerAddComponent, LayerBuilderComponent, CakeComponent], // Import standalone components
})
export class CakeBuilderComponent {
  layers: Layer[] = [];

  constructor(private layerService: LayerService) {
    this.layers = this.layerService.getLayers();
  }

  addLayer(layer: Layer) {
    this.layerService.addLayer(layer);
    this.layers = this.layerService.getLayers();
  }

  deleteLayer(index: number) {
    this.layerService.deleteLayer(index);
    this.layers = this.layerService.getLayers();
  }

  updateLayer(index: number, updatedLayer: Layer) {
    this.layers[index] = updatedLayer;
  }
}
