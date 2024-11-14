
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayerFormComponent } from '../layer-form/layer-form.component';
import { CakeLayer } from '../../models/layer.model';

@Component({
  selector: 'app-layer-add',
  standalone: true,  // Mark as standalone
  imports: [CommonModule, FormsModule, LayerFormComponent],  // Import necessary modules
  templateUrl: `./layer-add.component.HTML`,
  styleUrls: ['./layer-add.component.css']
})
export class LayerAddComponent {
  @Input() layers: CakeLayer[] = [];
  @Output() addLayer = new EventEmitter<CakeLayer>();
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  showForm = false;

  newLayer = { color: '#ffffff', width: 5, height: 5 };
  


  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitLayer() {
    const layerCopy = {...this.newLayer };
    this.addLayer.emit(layerCopy);
    this.layers.push(layerCopy);   // added unshift command to array to force elements to add to the top of the array
    this.newLayer = { color: '#ffffff', width: 5, height: 5 };
    this.toggleForm();
  }

  cancelLayer() {
    this.newLayer = { color: '#ffffff', width: 5, height: 5 };
    this.toggleForm();
  }
}
