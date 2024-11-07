// src/app/cake-builder/layer-add/layer-add.component.ts
import { Component } from '@angular/core';
import { LayerService } from '../../services/layer.service';
import { CommonModule } from '@angular/common';
import { LayerFormComponent } from '../layer-form/layer-form.component';

@Component({
  selector: 'app-layer-add',
  templateUrl: './layer-add.component.html',
  styleUrls: ['./layer-add.component.css'],
  standalone: true,
  imports: [CommonModule, LayerFormComponent]
})
export class LayerAddComponent {
  showForm = false;

  constructor(private layerService: LayerService) {}

  addLayer(layer: Layer) {
    this.layerService.addLayer(layer);
    this.showForm = false;
  }
}
