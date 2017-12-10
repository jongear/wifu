import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsMapComponent } from './components/us-map.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        UsMapComponent
    ],
    exports: [
        UsMapComponent
    ]
})
export class D3Module {
}
