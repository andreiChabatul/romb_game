import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonStandartComponent } from './components/button-standart/button-standart.component';
import { ColorCellDirective } from './directive/color-cell.directive';
import { ColorLineDirective } from './directive/color-line.directive';
import { ColorNameDirective } from './directive/color-name.directive';
import { ButtonMaterialsComponent } from './components/button-materials/button-materials.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalRegisterComponent } from './components/modalRegister/modalRegister.component';
import { MaterialsModule } from '../materials/materials.module';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';

@NgModule({
    declarations: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ColorCellDirective,
        ColorLineDirective,
        ColorNameDirective,
        ModalComponent,
        ModalRegisterComponent,
        ModalLoginComponent
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
