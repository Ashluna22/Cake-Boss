import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeLayerComponent } from './cake-layer.component';

describe('CakeLayerComponent', () => {
  let component: CakeLayerComponent;
  let fixture: ComponentFixture<CakeLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakeLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
