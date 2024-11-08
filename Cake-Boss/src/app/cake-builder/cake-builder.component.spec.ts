// src/app/cake-builder/cake-builder.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CakeBuilderComponent } from './cake-builder.component';
import { LayerService } from '../services/layer.service';  // Adjusted path
import { CommonModule } from '@angular/common';

import { AppModule } from '../app.module';

await TestBed.configureTestingModule({
  imports: [CommonModule, AppModule],  // Import AppModule if it includes CakeLayerComponent
  declarations: [CakeBuilderComponent],
  providers: [LayerService]
}).compileComponents();



describe('CakeBuilderComponent', () => {
  let component: CakeBuilderComponent;
  let fixture: ComponentFixture<CakeBuilderComponent>;
  let layerService: LayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, CakeLayerComponent],
      declarations: [CakeBuilderComponent],
      providers: [LayerService]
    }).compileComponents();

    fixture = TestBed.createComponent(CakeBuilderComponent);
    component = fixture.componentInstance;
    layerService = TestBed.inject(LayerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
