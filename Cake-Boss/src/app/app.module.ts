import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { CakeBuilderComponent } from './cake-builder/cake-builder.component';
import { LayerAddComponent } from './layer-add/layer-add.component';
import { LayerBuilderComponent } from './layer-builder/layer-builder.component';
import { CakeComponent } from './cake/cake.component';

// Services
import { LayerService } from './services/layer.service';

@NgModule({
  declarations: [
    AppComponent,             
    CakeBuilderComponent,     
    LayerAddComponent,        
    LayerBuilderComponent,    
    CakeComponent             
  ],
  imports: [
    BrowserModule,            
    FormsModule               // Provides ngModel and other form functionalities
  ],
  providers: [LayerService],  // Global provider for layer management
  bootstrap: [AppComponent]   // Bootstraps the AppComponent as the root of the app
})
export class AppModule {}
