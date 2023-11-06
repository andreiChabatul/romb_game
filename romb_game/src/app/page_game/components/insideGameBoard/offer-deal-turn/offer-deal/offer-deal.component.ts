import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { offerInfo, gameCell } from 'src/app/types';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectAllPlayerArr, selectGameRoom, selectPlayerTurnId } from 'src/store/selectors';

@Component({
  selector: 'app-offer-deal',
  templateUrl: './offer-deal.component.html',
  styleUrls: ['./offer-deal.component.scss']
})
export class OfferDealComponent {

  gameRoom$ = this.store.select(selectGameRoom);
  players$ = this.store.select(selectAllPlayerArr);
  turnId$ = this.store.select(selectPlayerTurnId);
  _isSelectPlayer: boolean;
  _isAwaitSoluton: boolean;
  userIdReceiver: string;
  buttonOffer: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.SEND_DEAL, width: '12vw', height: '5vh', show: false },
    { action: ACTIONS_BUTTON.END_CONTROL, width: '12vw', height: '5vh', show: true }];

  constructor(private store: Store<AppStore>) {
    this._isAwaitSoluton = true;
  }

  selectPlayer(userId: string): void {
    this.calcBalanse();
    this.userIdReceiver = userId;
    this._isSelectPlayer = true;
    this.buttonOffer[0].show = this._isSelectPlayer;
  }

  calcBalanse(): Observable<number> {
    const sumCompany = (board: gameCell[], dealInfo: offerInfo | undefined): number =>
      dealInfo
        ? board.reduce((prev, cur) =>
          dealInfo.indexCompany.includes(cur.indexCell)
            ? prev + Number(cur.cellCompany?.priceCompany)
            : prev,
          (dealInfo ? dealInfo.valueMoney : 0))
        : 0;

    return this.gameRoom$.pipe(
      map((gameroom) => {
        const sumOffer = sumCompany(gameroom.board, gameroom.offerDealInfo?.offerPerson);
        const sumReceive = sumCompany(gameroom.board, gameroom.offerDealInfo?.receivePerson);
        let result = sumOffer / sumReceive;
        result = result > 2 ? 2 : result;
        return result = result < 0 ? 0 : result;
      })
    )
  }

  textBalanse(): Observable<string> {
    return this.calcBalanse().pipe(
      map((result) =>
        (isNaN(result))
          ? 'nanResult'
          : (result > 0.8 && result < 1.2) ? 'balanseDeal' : 'noBalanseDeal'
      )
    )
  }

  clickButton(): void {
    this._isAwaitSoluton = false;
  }
}
