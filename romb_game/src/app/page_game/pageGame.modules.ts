import { NgModule } from '@angular/core';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './cell/cell.component';
import { BrowserModule } from '@angular/platform-browser';
import { InfoPlayerComponent } from './info-player/info-player.component';
import { SharedModule } from 'src/shared/shared.module';
import { ChatGameComponent } from './chat-game/chat-game.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
    declarations: [
        PageGameComponent,
        GameBoardComponent,
        CellComponent,
        InfoPlayerComponent,
        ChatGameComponent,
        ChatMessageComponent

    ],
    imports: [
        BrowserModule, SharedModule

    ],
    exports: [PageGameComponent],
    providers: [],
    bootstrap: []
})
export class PageGame { }
