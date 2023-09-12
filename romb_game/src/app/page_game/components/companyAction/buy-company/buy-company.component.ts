import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TIME_BUY_COMPANY } from 'src/app/const';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { ClearSellCompany } from 'src/store/actions';
import { selectSellCompany } from 'src/store/selectors';

@Component({
  selector: 'app-buy-company',
  templateUrl: './buy-company.component.html',
  styleUrls: ['./buy-company.component.scss']
})
export class BuyCompanyComponent implements OnInit {

  sellCompany$ = this.store.select(selectSellCompany);
  subscription$: Subscription;
  buyCompany = ACTIONS_BUTTON.BUY_COMPANY;
  refuseBuy = ACTIONS_BUTTON.REFUSE_BUY;
  auctionStep = ACTIONS_BUTTON.AUCTION_STEP;
  indexCompany: number = 0;
  timer: number;

  constructor(
    private store: Store<AppStore>, private webSocket: WebSocketController) { }

  ngOnInit(): void {
    this.timer = TIME_BUY_COMPANY;
    this.subscription$ = this.sellCompany$.
      subscribe((infoCompany) =>
        infoCompany ? this.indexCompany = infoCompany.indexCompany : ''
      );
    this.timerBuyCancel();
  }


  companyBuy(): void {
    this.companyAction(EACTION_WEBSOCKET.BUY_COMPANY);
  }

  companyCancel(): void {
    this.companyAction(EACTION_WEBSOCKET.CANCEL_BUY);
  }

  stepAuction(): void {
    this.companyAction(EACTION_WEBSOCKET.AUCTION_STEP);
  }

  private companyAction(action: EACTION_WEBSOCKET) {
    this.store.dispatch(new ClearSellCompany());
    this.webSocket.sendMessage(action, { indexCompany: this.indexCompany })
  }

  private timerBuyCancel() {
    const timerId = setInterval(() => this.timer -= 1, 1000);
    setTimeout(() => { clearInterval(timerId); this.companyCancel(); }, (TIME_BUY_COMPANY * 1000));
  }

}
