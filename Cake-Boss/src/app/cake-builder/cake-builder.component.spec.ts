import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CakeBuilderComponent } from './cake-builder.component';
import { CakeLayerComponent } from '../cake-layer/cake-layer.component';
import { LayerService } from '../layer.service';
import { CommonModule } from '@angular/common';

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
