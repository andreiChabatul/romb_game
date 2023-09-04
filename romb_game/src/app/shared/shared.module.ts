import { NgModule } from '@angular/core';
import { ButtonStandartComponent } from './components/button-standart/button-standart.component';
import { ColorCellDirective } from './directive/color-cell.directive';
import { ColorLineDirective } from './directive/color-line.directive';
import { ColorNameDirective } from './directive/color-name.directive';
import { ButtonMaterialsComponent } from './components/button-materials/button-materials.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialsModule } from '../materials/materials.module';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import { CommonModule } from '@angular/common';
import { ButtonControllerService } from './services/button-controller.service';
import { ModalInfoCellComponent } from './components/modal-info-cell/modal-info-cell.component';

@NgModule({
    declarations: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ColorCellDirective,
        ColorLineDirective,
        ColorNameDirective,
        ModalComponent,
        ModalRegisterComponent,
        ModalLoginComponent,
        ModalInfoCellComponent
    ],
    imports: [
        CommonModule , MaterialsModule

    ],
    exports: [
        ButtonStandartComponent,
        ColorCellDirective,
        ColorLineDirective,
        ColorNameDirective,
        ButtonMaterialsComponent,
        ModalComponent,
    ],
    providers: [ButtonControllerService],
    bootstrap: []
})
export class SharedModule { }
