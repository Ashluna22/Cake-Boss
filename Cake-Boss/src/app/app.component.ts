import { Component } from '@angular/core';
import { LayerFormComponent } from './cake-builder/layer-form/layer-form.component';
import { LayerAddComponent } from './cake-builder/layer-add/layer-add.component';
import { LayerBuilderComponent } from './cake-builder/layer-builder/layer-builder.component';
import { CakeComponent } from './cake/cake.component';
import { CakeBuilderComponent } from './cake-builder/cake-builder.component';
import { LayerService } from './services/layer.service';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LayerFormComponent, LayerAddComponent, LayerBuilderComponent, CakeComponent, CakeBuilderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    

}