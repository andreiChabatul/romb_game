import { NgModule } from '@angular/core';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './cell/cell.component';
import { ColorLineDirective } from '../directive/color-line.directive';
import { ColorCellDirective } from '../directive/color-cell.directive';
import { BrowserModule } from '@angular/platform-browser';
import { InfoPlayerComponent } from './info-player/info-player.component';

@NgModule({
    declarations: [
        PageGameComponent,
        GameBoardComponent,
        CellComponent,
        ColorCellDirective,
        ColorLineDirective,
        InfoPlayerComponent

    ],
    imports: [
        BrowserModule

    ],
    exports: [PageGameComponent],
    providers: [],
    bootstrap: []
})
export class PageGame { }
