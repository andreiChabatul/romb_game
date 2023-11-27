import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { EMPTY_GAME_ROOM } from 'src/app/const';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { gameRoom } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { ChangeModal, ControlCompany, ControlInsideBoard, StartGame } from 'src/store/actions';
import { selectIsLogin } from 'src/store/selectors';

@Injectable({
  providedIn: 'root'
})
export class ButtonControllerService implements OnDestroy {

  susbscription$: Subscription
  isLogin: boolean;
  isLogin$ = this.store.select(selectIsLogin);

  constructor(private store: Store<AppStore>,
    private webSocketController: WebSocketController,
    private router: Router) {
    this.susbscription$ = this.isLogin$.pipe(
      map((login) => this.isLogin = login)).subscribe()
  }

  actionButton(action: ACTIONS_BUTTON) {
    switch (action) {

      case ACTIONS_BUTTON.CREATE_ROOM:
        break;

      case ACTIONS_BUTTON.NEW_GAME:
        (this.isLogin)
          ? this.router.navigate(['create-game'])
          : this.store.dispatch(new ChangeModal('login'));
        break;

      case ACTIONS_BUTTON.JOIN_GAME:
        (this.isLogin)
          ? this.router.navigate(['rooms'])
          : this.store.dispatch(new ChangeModal('login'));
        break;

      case ACTIONS_BUTTON.SETTING:
        console.log('setting')
        break;

      case ACTIONS_BUTTON.HELP:
        console.log('help')
        break;

      case ACTIONS_BUTTON.INFO:
        console.log('info')
        break;

      case ACTIONS_BUTTON.LOG_OUT:
        console.log('log_out')
        break;

      case ACTIONS_BUTTON.LOG_IN:
        this.store.dispatch(new ChangeModal('login'));
        break;

      case ACTIONS_BUTTON.UPDATE_ROOM:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_ROOM, { action: 'list' });
        break;

      case ACTIONS_BUTTON.ADD_ROOM:
        this.router.navigate(['create-game']);
        break;

      case ACTIONS_BUTTON.BUY_STOCK:
        this.store.dispatch(new ControlCompany('buyStock'));
        break;

      case ACTIONS_BUTTON.SELL_STOCK:
        this.store.dispatch(new ControlCompany('sellStock'));
        break;

      case ACTIONS_BUTTON.BUY_COMPANY:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.ACTIVE_CELL);
        break;

      case ACTIONS_BUTTON.START_AUCTION:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.AUCTION, { action: 'startAuction' });
        break;

      case ACTIONS_BUTTON.AUCTION_STEP:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.AUCTION, { action: 'stepAuction' });
        break;

      case ACTIONS_BUTTON.AUCTION_LEAVE:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.AUCTION, { action: 'leaveAuction' });
        break;

      case ACTIONS_BUTTON.DICE_ROLL:
        this.store.dispatch(new ControlInsideBoard('diceRoll'));
        break;

      case ACTIONS_BUTTON.MORTGAGE:
        this.store.dispatch(new ControlCompany('pledgeCompany'));
        break;

      case ACTIONS_BUTTON.BUY_OUT_COMPANY:
        this.store.dispatch(new ControlCompany('buyOutCompany'));
        break;

      case ACTIONS_BUTTON.END_CONTROL:
        this.store.dispatch(new ControlCompany(undefined));
        break;

      case ACTIONS_BUTTON.PAY:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.ACTIVE_CELL);
        break;

      case ACTIONS_BUTTON.OFFER_DEAL:
        this.store.dispatch(new ControlInsideBoard('offerDeal'));
        break;

      case ACTIONS_BUTTON.ACCEPT_DEAL:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_DEAL, { action: 'accept' });
        break;

      case ACTIONS_BUTTON.REFUSE_DEAL:
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_DEAL, { action: 'refuse' });
        break;

      case ACTIONS_BUTTON.CANSEL_DEAL:
        this.store.dispatch(new ControlInsideBoard('startButtons'));
        break;

      case ACTIONS_BUTTON.LEAVE_GAME: {
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.END_GAME, { action: 'leave' });
        this.store.dispatch(new StartGame(EMPTY_GAME_ROOM));
        this.router.navigate(['rooms']);
        break;
      }

      case ACTIONS_BUTTON.STAY_GAME: {
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.END_GAME, { action: 'stay' });
        break;
      }

      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.susbscription$.unsubscribe();
  }
}
