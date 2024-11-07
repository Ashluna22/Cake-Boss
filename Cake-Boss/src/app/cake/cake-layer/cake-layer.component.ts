import { Component, Input } from '@angular/core';
import { CakeLayer } from '../cake.component';

@Component({
  selector: 'app-cake-layer',
  standalone: true,
  template: `
    <div class="cake-layer" 
         [style.height.px]="layer.height * 20"
         [style.width.px]="layer.width * 20"
         [style.backgroundColor]="layer.color">
    </div>
  `,
  styles: [`
    .cake-layer {
      border: 1px solid #000;
      margin: 0 auto;
    }
  `]
})
export class CakeLayerComponent {
  @Input() layer!: CakeLayer;
}
