import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { TIME_AUCTION_COMPANY } from 'src/app/const';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { ClearSellCompany } from 'src/store/actions';

@Component({
  selector: 'app-auction-buy',
  templateUrl: './auction-buy.component.html',
  styleUrls: ['./auction-buy.component.scss']
})
export class AuctionBuyComponent implements OnDestroy, OnChanges {

  @Input() indexCompany: number;
  @Input() auctionWinner: string | undefined;
  @Input() auctionPrice: number | undefined;
  auctionStep = ACTIONS_BUTTON.AUCTION_STEP;
  timerEnd: NodeJS.Timeout;
  auctionEnd: NodeJS.Timeout;
  timer = TIME_AUCTION_COMPANY;

  constructor(private webSocket: WebSocketController, private store: Store<AppStore>) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTimer();
  }

  stepAuction(): void {
    this.webSocket.sendMessage(EACTION_WEBSOCKET.AUCTION_STEP, { indexCompany: this.indexCompany });
  }

  private endAuction(): void {
    this.webSocket.sendMessage(EACTION_WEBSOCKET.AUCTION_END, { indexCompany: this.indexCompany });
    this.store.dispatch(new ClearSellCompany());
  }

  ngOnDestroy(): void {
    this.deleteTimer();
  }


  private refreshTimer(): void {
    this.deleteTimer();
    this.timer = TIME_AUCTION_COMPANY;
    this.timerEnd = setInterval(() => this.timer -= 1, 1000);
    this.auctionEnd = setTimeout(() => this.endAuction(), (TIME_AUCTION_COMPANY * 1000));
  }

  private deleteTimer(): void {
    clearInterval(this.timerEnd);
    clearTimeout(this.auctionEnd);
  }

}
