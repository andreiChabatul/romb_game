import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectOfferDealInfo } from 'src/store/selectors';

@Component({
  selector: 'app-receive-deal',
  templateUrl: './receive-deal.component.html',
  styleUrls: ['./receive-deal.component.scss']
})
export class ReceiveDealComponent {

  offerDealInfo$ = this.store.select(selectOfferDealInfo);
  buttonDeal: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.ACCEPT_DEAL, width: '12vw', height: '5vh', show: true },
    { action: ACTIONS_BUTTON.REFUSE_DEAL, width: '12vw', height: '5vh', show: true }];

  constructor(private store: Store<AppStore>) { }

}
