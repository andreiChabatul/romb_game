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
import { ColorShadowDirective } from './directive/color-shadow.directive';
import { ImgAssetsPipe } from './pipe/img-assets.pipe';
import { StockAssetsPipe } from './pipe/stock.assets.pipe';
import { RentPipe } from './pipe/rent.pipe';
import { TranslocoRootModule } from '../transloco-root.module';
import { ChangeMessagePipe } from './pipe/change.message.pipe';
import { RaitingStarsComponent } from './components/raiting-stars/raiting-stars.component';
import { FotoPlayerComponent } from './components/foto-player/foto-player.component';
import { ModalExitGameComponent } from './components/modal-exit-game/modal-exit-game.component';

@NgModule({
    declarations: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ModalComponent,
        ModalRegisterComponent,
        ModalLoginComponent,
        ModalInfoCellComponent,
        ColorShadowDirective,
        ImgAssetsPipe,
        StockAssetsPipe,
        RentPipe,
        ChangeMessagePipe,
        RaitingStarsComponent,
        FotoPlayerComponent,
        ModalExitGameComponent
    ],
    imports: [
        CommonModule, MaterialsModule, TranslocoRootModule

    ],
    exports: [
        ButtonStandartComponent,
        ButtonMaterialsComponent,
        ModalComponent,
        ColorShadowDirective,
        ImgAssetsPipe,
        StockAssetsPipe,
        RentPipe,
        TranslocoRootModule,
        ChangeMessagePipe,
        RaitingStarsComponent,
        FotoPlayerComponent
    ],
    providers: [ButtonControllerService],
    bootstrap: []
})
export class SharedModule { }
