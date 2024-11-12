// displays a single layer of the cake
// the layer has a height, width, and color

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CakeLayer } from '../../models/layer.model';
@Component({
  selector: 'app-cake-layer',
  standalone: true,
  templateUrl: `./cake-layer.component.html`,
  styleUrls: [`./cake-layer.component.css`]
})
export class CakeLayerComponent {
  @Input() layer!: CakeLayer; 
}