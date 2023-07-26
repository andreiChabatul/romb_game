import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonStandartComponent } from './button-standart/button-standart.component';
import { ColorCellDirective } from './directive/color-cell.directive';
import { ColorLineDirective } from './directive/color-line.directive';
import { ColorNameDirective } from './directive/color-name.directive';
import { ButtonMaterialsComponent } from './button-materials/button-materials.component';
import { ModalComponent } from './modal/modal.component';
import { ModalRegisterComponent } from './modalRegister/modalRegister.component';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
    declarations: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ColorCellDirective,
        ColorLineDirective,
        ColorNameDirective,
        ModalComponent,
        ModalRegisterComponent
    ],
    imports: [
        BrowserModule, MaterialsModule

    ],
    exports: [
        ButtonStandartComponent,
        ColorCellDirective,
        ColorLineDirective,
        ColorNameDirective,
        ButtonMaterialsComponent,
        ModalComponent,
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
