import { NgModule } from '@angular/core';
import { PageGameComponent } from './pages/page-game/page-game.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { InfoPlayerComponent } from './components/info-player/info-player.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from '../shared/shared.module';
import { PageGameRoutingModule } from './page.game.routing.module';
import { CommonModule } from '@angular/common';
import { GameCellComponent } from './components/cell/game-cell/game-cell.component';
import { GameCellCompanyComponent } from './components/cell/game-cell-company/game-cell-company.component';
import { GameCellSquareComponent } from './components/cell/game-cell-square/game-cell-square.component';
import { ChatGameComponent } from './components/chat/chat-game/chat-game.component';
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import { ChatInputComponent } from './components/chat/chat-input/chat-input.component';
import { DiceRollComponent } from './components/dices/dice-roll/dice-roll.component';
import { DiceComponent } from './components/dices/dice/dice.component';
import { DiceSideComponent } from './components/dices/dice-side/dice-side.component';
import { BuyCompanyComponent } from './components/companyAction/buy-company/buy-company.component';
import { PrimaryBuyComponent } from './components/companyAction/primary-buy/primary-buy.component';
import { AuctionBuyComponent } from './components/companyAction/auction-buy/auction-buy.component';
import { PlayerBalanceComponent } from './components/player-balance/player-balance.component';

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
        DiceRollComponent,
        DiceComponent,
        DiceSideComponent,
        BuyCompanyComponent,
        PrimaryBuyComponent,
        AuctionBuyComponent,
        PlayerBalanceComponent
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
