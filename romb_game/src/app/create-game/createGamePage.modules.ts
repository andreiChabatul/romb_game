import { NgModule } from '@angular/core';
import { CreateGameComponent } from './pages/create-game.component';
import { CreateGameFormComponent } from './create-game-form/create-game-form.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from '../shared/shared.module';
import { PageCreateRoutingModule } from './page.create.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CreateGameComponent,
        CreateGameFormComponent,
    ],
    imports: [
        SharedModule, MaterialsModule, CommonModule

    ],
    exports: [PageCreateRoutingModule],
    providers: [],
    bootstrap: []
})
export class PageCreateGame { }
