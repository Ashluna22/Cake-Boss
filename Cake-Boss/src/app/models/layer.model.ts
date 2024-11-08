// src/app/layer/layer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayerFormComponent } from './layerform/layerform.component';
import { LayerAddComponent } from './layeradd/layeradd.component';

@NgModule({
  declarations: [
    LayerFormComponent,
    LayerAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,  // Import FormsModule to use ngModel
  ],
  exports: [
    LayerFormComponent,
    LayerAddComponent,
  ]
})
export class LayerModule {}
