import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TIME_BUY_COMPANY } from 'src/app/const';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { ClearSellCompany } from 'src/store/actions';

@Component({
  selector: 'app-primary-buy',
  templateUrl: './primary-buy.component.html',
  styleUrls: ['./primary-buy.component.scss']
})
export class PrimaryBuyComponent implements OnInit {

  @Input() indexCompany: number;
  buyCompany = ACTIONS_BUTTON.BUY_COMPANY;
  refuseBuy = ACTIONS_BUTTON.REFUSE_BUY;
  timer: number;
  timerId: NodeJS.Timeout;
  timerCancel: NodeJS.Timeout;
  isAction: boolean;

  constructor(private store: Store<AppStore>, private webSocket: WebSocketController) { }

  ngOnInit(): void {
    this.timer = TIME_BUY_COMPANY;
    this.isAction = true;
    this.timerBuyCancel();
  }

  companyBuy(): void {
    this.companyAction(EACTION_WEBSOCKET.BUY_COMPANY);
  }

  companyCancel(): void {
    this.companyAction(EACTION_WEBSOCKET.CANCEL_BUY);
  }

  private timerBuyCancel(): void {
    this.timerId = setInterval(() => this.timer -= 1, 1000);
    this.timerCancel = setTimeout(() => {
      clearInterval(this.timerId);
      this.companyCancel();
    }, (TIME_BUY_COMPANY * 1000));
  }

  private companyAction(action: EACTION_WEBSOCKET): void {
    clearTimeout(this.timerCancel);
    clearInterval(this.timerId)
    this.store.dispatch(new ClearSellCompany());
    this.webSocket.sendMessage(action, { indexCompany: this.indexCompany })
  }

}
