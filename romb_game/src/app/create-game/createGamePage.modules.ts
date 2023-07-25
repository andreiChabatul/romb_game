import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateGameComponent } from './pages/create-game.component';
import { CreateGameFormComponent } from './create-game-form/create-game-form.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SelectCreateGameComponent } from './select-create-game/select-create-game.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CreateGameComponent,
        CreateGameFormComponent,
        SelectCreateGameComponent

    ],
    imports: [
        BrowserModule, SharedModule, MaterialsModule

    ],
    exports: [CreateGameComponent],
    providers: [],
    bootstrap: []
})
export class PageCreateGame { }
