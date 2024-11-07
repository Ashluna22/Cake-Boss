import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Layer } from '../../models/layer.model';

@Component({
  selector: 'app-layer-form',
  templateUrl: './layer-form.component.html',
  styleUrls: ['./layer-form.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LayerFormComponent {
  height: number = 1;
  width: number = 1;
  color: string = '#ffffff';

  @Output() save = new EventEmitter<Layer>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    const newLayer: Layer = {
      height: this.height,
      width: this.width,
      color: this.color
    };
    this.save.emit(newLayer);
  }
}
