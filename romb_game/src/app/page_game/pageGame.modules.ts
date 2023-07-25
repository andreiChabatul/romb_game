import { NgModule } from '@angular/core';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './cell/cell.component';
import { BrowserModule } from '@angular/platform-browser';
import { InfoPlayerComponent } from './info-player/info-player.component';
import { ChatGameComponent } from './chat-game/chat-game.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PageGameComponent,
        GameBoardComponent,
        CellComponent,
        InfoPlayerComponent,
        ChatGameComponent,
        ChatMessageComponent,
        ChatInputComponent

    ],
    imports: [
        BrowserModule, SharedModule, MaterialsModule

    ],
    exports: [PageGameComponent],
    providers: [],
    bootstrap: []
})
export class PageGame { }
