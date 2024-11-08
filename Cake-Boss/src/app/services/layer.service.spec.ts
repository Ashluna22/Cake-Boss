// src/app/services/layer.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { LayerService } from '../services/layer.service';
import { Layer } from '../models/layer.model';

describe('LayerService', () => {
  let service: LayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a layer', () => {
    const newLayer: Layer = { height: 5, width: 5, color: 'blue' };
    service.addLayer(newLayer);
    expect(service.getLayers()).toContain(newLayer);
  });

  it('should delete a layer by index', () => {
    const layer1: Layer = { height: 5, width: 5, color: 'blue' };
    const layer2: Layer = { height: 6, width: 6, color: 'red' };
    service.addLayer(layer1);
    
