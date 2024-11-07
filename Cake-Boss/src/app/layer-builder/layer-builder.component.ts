import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Layer } from '../layer.model';

@Component({
  selector: 'app-layer-builder',
  templateUrl: './layer-builder.component.html',
  styleUrls: ['./layer-builder.component.css']
})
export class LayerBuilderComponent {
  @Input() layer!: Layer;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
