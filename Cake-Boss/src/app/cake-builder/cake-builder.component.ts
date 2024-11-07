// src/app/cake-builder/cake-builder.component.ts
import { Component, OnInit } from '@angular/core';
import { LayerService } from '../layer.service';
import { Layer } from '../layer.model';

@Component({
  selector: 'app-cake-builder',
  templateUrl: './cake-builder.component.html',
  styleUrls: ['./cake-builder.component.css']
})
export class CakeBuilderComponent implements OnInit {
  layers: Layer[] = [];

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {
    this.layers = this.layerService.getLayers();  // Load layers on initialization
  }

  addLayer(layer: Layer) {
    this.layerService.addLayer(layer);
    this.layers = this.layerService.getLayers();  // Update the layers array after adding
  }

  deleteLayer(index: number) {
    this.layerService.deleteLayer(index);
    this.layers = this.layerService.getLayers();  // Update the layers array after deletion
  }
}


