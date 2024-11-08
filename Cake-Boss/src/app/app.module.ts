// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LayerFormComponent } from './layerform/layerform.component';
import { LayerAddComponent } from './layeradd/layeradd.component';

@NgModule({
  declarations: [
    LayerFormComponent,  // Declare LayerFormComponent here
    LayerAddComponent,   // Declare LayerAddComponent here
    // Any other components...
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [/* Root component here */]
})
export class AppModule {}
