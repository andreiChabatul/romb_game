import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonStandartComponent } from './button-standart/button-standart.component';

@NgModule({
    declarations: [
        ButtonStandartComponent

    ],
    imports: [
        BrowserModule

    ],
    exports: [ButtonStandartComponent],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
