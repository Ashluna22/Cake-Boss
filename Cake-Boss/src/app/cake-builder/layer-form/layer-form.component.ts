// src/app/layer-form/layer-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CakeLayer } from '../../models/layer.model';

@Component({
  selector: 'app-layer-form',
  standalone: true,
  imports: [FormsModule],  // Include FormsModule for ngModel
  templateUrl: `./layer-form.component.html`,
  styleUrls: ['./layer-form.component.css']
})
export class LayerFormComponent {
  @Output() save = new EventEmitter<CakeLayer>();
  @Output() cancel = new EventEmitter<void>();

  height = 1;
  width = 1;
  color = 'red';
  colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  onSave(): void {
    this.save.emit({ height: this.height, width: this.width, color: this.color });
  }
}
