import { Component, Input } from '@angular/core';
import { Layer } from '../models/layer.model';

@Component({
  selector: 'app-layer-builder',
  standalone: true,  // Make it standalone
  template: `
    <div>
      <p>Layer Details:</p>
      <p>Height: {{ layer.height }}</p>  
      <p>Width: {{ layer.width }}</p>    
      <p>Color: {{ layer.color }}</p>    
    </div>
  `,
})
export class LayerBuilderComponent {
  @Input() layer!: Layer;  
}
