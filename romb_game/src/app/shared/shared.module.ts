import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonStandartComponent } from './button-standart/button-standart.component';
import { ColorCellDirective } from './directive/color-cell.directive';
import { ColorLineDirective } from './directive/color-line.directive';
import { ColorNameDirective } from './directive/color-name.directive';


@NgModule({
    declarations: [
        ButtonStandartComponent,
        ColorCellDirective,
        ColorLineDirective,
        ColorNameDirective
    ],
    imports: [
        BrowserModule

    ],
    exports: [ButtonStandartComponent, ColorCellDirective, ColorLineDirective, ColorNameDirective],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
