// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LayerFormComponent } from './layer-form/layer-form.component';
import { LayerAddComponent } from './layer-add/layer-add.component';
import { LayerBuilderComponent } from './layer-builder/layer-builder.component';

@NgModule({
  declarations: [
    LayerFormComponent,
    LayerAddComponent,
    LayerBuilderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for ngModel in LayerFormComponent
  ],
})
export class AppModule {}

