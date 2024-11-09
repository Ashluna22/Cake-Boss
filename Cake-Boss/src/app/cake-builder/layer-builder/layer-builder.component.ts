// src/app/layer-builder/layer-builder.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CakeLayer } from '../../models/layer.model';

@Component({
  selector: 'app-layer-builder',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule for ngModel
  templateUrl: `./layer-builder.component.html`,
  styleUrls: ['./layer-builder.component.css']
})
export class LayerBuilderComponent {
  @Input() layer!: CakeLayer;
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<CakeLayer>();
}
