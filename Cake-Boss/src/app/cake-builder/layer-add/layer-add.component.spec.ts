import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerAddComponent } from './layer-add.component';

describe('LayerAddComponent', () => {
  let component: LayerAddComponent;
  let fixture: ComponentFixture<LayerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
