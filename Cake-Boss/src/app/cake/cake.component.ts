// CakeColor enum and CakeLayer interface

import { Component } from '@angular/core';
import { LayerService } from './layer.service';
import { CakeLayerComponent } from './cake-layer/cake-layer.component';

export enum CakeColor {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
  BLUEBERRY = 'blueberry',
  MINT = 'mint',
  LEMON = 'lemon'
}

export interface CakeLayer {
  height: number;  // in inches, between 0.5 and 10
  width: number;   // in inches, between 1 and 10
  color: CakeColor;
}

// npm install tslib quick fix

@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [CakeLayerComponent],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent {
  constructor(private layerService: LayerService) {}

  get layers(): CakeLayer[] {
    return this.layerService.getLayers();
  }
}
