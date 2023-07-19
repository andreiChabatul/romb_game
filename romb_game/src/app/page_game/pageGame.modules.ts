import { NgModule } from '@angular/core';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './cell/cell.component';
import { BrowserModule } from '@angular/platform-browser';
import { InfoPlayerComponent } from './info-player/info-player.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [
        PageGameComponent,
        GameBoardComponent,
        CellComponent,
        InfoPlayerComponent

    ],
    imports: [
        BrowserModule, SharedModule

    ],
    exports: [PageGameComponent],
    providers: [],
    bootstrap: []
})
export class PageGame { }
