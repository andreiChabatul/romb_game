import { NgModule } from '@angular/core';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { InfoPlayerComponent } from './info-player/info-player.component';
import { ChatGameComponent } from './chat-game/chat-game.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from '../shared/shared.module';
import { PageGameRoutingModule } from './page.game.routing.module';
import { CommonModule } from '@angular/common';
import { GameCellComponent } from './components/game-cell/game-cell.component';
import { GameCellCompanyComponent } from './components/game-cell-company/game-cell-company.component';
import { GameCellSquareComponent } from './components/game-cell-square/game-cell-square.component';


@NgModule({
    declarations: [
        PageGameComponent,
        GameBoardComponent,
        InfoPlayerComponent,
        ChatGameComponent,
        ChatMessageComponent,
        ChatInputComponent,
        GameBoardComponent,
        GameCellComponent,
        GameCellCompanyComponent,
        GameCellSquareComponent,
    ],
    imports: [
        SharedModule,
        MaterialsModule,
        CommonModule
    ],
    exports: [PageGameRoutingModule],
    providers: [],
    bootstrap: []
})
export class PageGameModule { }
