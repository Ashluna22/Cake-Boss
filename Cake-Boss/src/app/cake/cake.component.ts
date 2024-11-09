// array of layers
// the cake is the sum of all the layers

// this component displays the entire cake with all the layers

import { Component } from '@angular/core';
import { LayerService } from '../services/layer.service';
import { CakeLayerComponent } from './cake-layer/cake-layer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [CommonModule, CakeLayerComponent],
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  constructor(private layerService: LayerService) {}

  get layers(): CakeLayer[] {
    return this.layerService.getLayers();
  }
}

