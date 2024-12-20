// array of layers
// the cake is the sum of all the layers

// this component displays the entire cake with all the layers

import { Component, Input } from '@angular/core';
import { LayerService } from '../services/layer.service';
import { CakeLayerComponent } from './cake-layer/cake-layer.component';
import { CommonModule } from '@angular/common';
import { CakeLayer } from '../models/layer.model';
import { CakeBuilderComponent } from '../cake-builder/cake-builder.component';

@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [CommonModule, CakeLayerComponent],
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  @Input() layers!: CakeLayer[]; 

  constructor(public layerService: LayerService) {}

  get selectedLayers(): CakeLayer[] {
    return this.layerService.getLayers();
  }
  get reversedLayers(): CakeLayer[]{
    return this.layers.reverse();
  }
  // default cake display
  cake: CakeLayer[] = [
    {
      color: "Yellow",
      height: 5,
      width: 20
    }
  ];

  // method to update cake based on changes made from cake-builder 
  updateCake(newCake: CakeLayer[]) {
    this.cake = newCake;
  }
}

