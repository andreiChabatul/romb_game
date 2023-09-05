import { NgModule } from '@angular/core';
import { ButtonStandartComponent } from './components/button-standart/button-standart.component';
import { ButtonMaterialsComponent } from './components/button-materials/button-materials.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialsModule } from '../materials/materials.module';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import { CommonModule } from '@angular/common';
import { ButtonControllerService } from './services/button-controller.service';
import { ModalInfoCellComponent } from './components/modal-info-cell/modal-info-cell.component';
import { ColorPlayerDirective } from './directive/color-name.directive';

@NgModule({
    declarations: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ModalComponent,
        ModalRegisterComponent,
        ModalLoginComponent,
        ModalInfoCellComponent,
        ColorPlayerDirective
    ],
    imports: [
        CommonModule , MaterialsModule

    ],
    exports: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ModalComponent,
        ColorPlayerDirective
    ],
    providers: [ButtonControllerService],
    bootstrap: []
})
export class SharedModule { }
