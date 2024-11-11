// src/app/cake-builder/cake-builder.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CakeLayer } from '../models/layer.model';
import { LayerService } from '../services/layer.service';
import { LayerAddComponent } from './layer-add/layer-add.component';
import { LayerBuilderComponent } from './layer-builder/layer-builder.component';
import { CakeComponent } from '../cake/cake.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cake-builder',
  standalone: true,
  templateUrl: `./cake-builder.component.html`,
  styleUrls: ['./cake-builder.component.css'],
  imports: [LayerAddComponent, LayerBuilderComponent, CakeComponent, FormsModule, CommonModule], // Import standalone components
})
export class CakeBuilderComponent {
  @Input() layer!: CakeLayer;
  layers: CakeLayer[] = [];

  newLayer: {
    height: number,
    width: number,
    color: string
} = {
    height: 0,
    width: 0,
    color: ""
}


  constructor(private layerService: LayerService) {
    this.layers = this.layerService.getLayers();
  }

  addLayer(layer: CakeLayer) {
    this.layerService.addLayer(layer);
    this.layers = this.layerService.getLayers();
  }

  deleteLayer(index: number) {
    this.layerService.deleteLayer(index);
    this.layers = this.layerService.getLayers();
  }

  updateLayer(index: number, updatedLayer: CakeLayer) {
    this.layers[index] = updatedLayer;
  }
}
