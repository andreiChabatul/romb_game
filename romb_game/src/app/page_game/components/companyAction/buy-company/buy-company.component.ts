import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TIME_BUY_COMPANY } from 'src/app/const';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
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
  indexCompany: number = 0;
  timer: number;

  constructor(
    private store: Store<AppStore>, private webSocket: WebSocketController) { }

  ngOnInit(): void {
    this.timer = TIME_BUY_COMPANY;
    this.subscription$ = this.sellCompany$.
      subscribe((infoCompany) => infoCompany ? this.indexCompany = infoCompany.indexCompany : '');
    this.timerBuyCancel();
  }


  companyBuy(): void {
    this.webSocket.sendMessage(EACTION_WEBSOCKET.BUY_COMPANY, { indexCompany: this.indexCompany })
  }

  companyCancel(): void {
    this.webSocket.sendMessage(EACTION_WEBSOCKET.SELL_COMPANY, { indexCompany: this.indexCompany })
  }

  private timerBuyCancel() {
    const timerId = setInterval(() => this.timer -= 1, 1000);
    setTimeout(() => { clearInterval(timerId); this.companyCancel(); }, (TIME_BUY_COMPANY * 1000));
  }

}
