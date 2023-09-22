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
import { ColorShadowDirective } from './directive/color-shadow.directive';
import { ColorBackgroundDirective } from './directive/color-back.directive';
import { ImgAssetsPipe } from './pipe/img-assets.pipe';
import { StockAssetsPipe } from './pipe/stock.assets.pipe';
import { RentPipe } from './pipe/rent.pipe';

@NgModule({
    declarations: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ModalComponent,
        ModalRegisterComponent,
        ModalLoginComponent,
        ModalInfoCellComponent,
        ColorPlayerDirective,
        ColorShadowDirective,
        ColorBackgroundDirective,
        ImgAssetsPipe,
        StockAssetsPipe,
        RentPipe
    ],
    imports: [
        CommonModule, MaterialsModule

    ],
    exports: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ModalComponent,
        ColorPlayerDirective,
        ColorShadowDirective,
        ColorBackgroundDirective,
        ImgAssetsPipe,
        StockAssetsPipe,
        RentPipe
    ],
    providers: [ButtonControllerService],
    bootstrap: []
})
export class SharedModule { }
