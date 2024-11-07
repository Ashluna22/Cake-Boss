import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerFormComponent } from './layer-form.component';

describe('LayerFormComponent', () => {
  let component: LayerFormComponent;
  let fixture: ComponentFixture<LayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
