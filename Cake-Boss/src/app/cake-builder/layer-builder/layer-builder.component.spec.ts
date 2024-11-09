import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBuilderComponent } from './layer-builder.component';

describe('LayerBuilderComponent', () => {
  let component: LayerBuilderComponent;
  let fixture: ComponentFixture<LayerBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
