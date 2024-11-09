// src/app/layer-add/layer-add.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CakeBuilderComponent } from '../cake-builder.component';
import { LayerFormComponent } from '../layer-form/layer-form.component';

@Component({
  selector: 'app-layer-add',
  standalone: true,  // Mark as standalone
  imports: [CommonModule, FormsModule, CakeBuilderComponent, LayerFormComponent],  // Import necessary modules
  templateUrl: `./layer-add.component.html`,
  styleUrls: ['./layer-add.component.css']
})
export class LayerAddComponent {
  @Output() addLayer = new EventEmitter<any>();
  @Output() save = new EventEmitter();
  showForm = false;
  newLayer = { color: '#ffffff', width: 5, height: 5 };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitLayer() {
    this.addLayer.emit({ ...this.newLayer });
    this.toggleForm();
  }
}
