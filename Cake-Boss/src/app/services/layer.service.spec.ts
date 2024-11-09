import { TestBed } from '@angular/core/testing';
import { LayerService } from './layer.service';
import { Layer } from '../models/layer.model';

describe('LayerService', () => {
  let service: LayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should add a layer and retrieve it', () => {
    const layer: Layer = { height: 5, width: 5, color: 'blue' };
    service.addLayer(layer);
    expect(service.getLayers()).toContain(layer);
  });

  it('should delete a layer by index', () => {
    const layers: Layer[] = [
      { height: 5, width: 5, color: 'blue' },
      { height: 6, width: 6, color: 'red' }
    ];
    layers.forEach(layer => service.addLayer(layer));

    service.deleteLayer(0);
    expect(service.getLayers()).toEqual([layers[1]]);
  });

  it('should return all layers', () => {
    const layers: Layer[] = [
      { height: 5, width: 5, color: 'blue' },
      { height: 6, width: 6, color: 'red' }
    ];
    layers.forEach(layer => service.addLayer(layer));

    expect(service.getLayers()).toEqual(layers);
  });
});
