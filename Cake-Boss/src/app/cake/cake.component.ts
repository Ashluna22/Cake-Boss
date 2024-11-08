import { Component } from '@angular/core';
import { LayerService } from '../services/layer.service';
import { CakeLayerComponent } from './cake-layer/cake-layer.component';
import { CommonModule } from '@angular/common';


export enum CakeColor {
  VANILLA = 'vanilla',
  CHOCOLATE = 'chocolate',
  STRAWBERRY = 'strawberry',
  BLUEBERRY = 'blueberry',
  MINT = 'mint',
  LEMON = 'lemon'
}

export interface CakeLayer {
  height: number;
  width: number;
  color: CakeColor;
}

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

