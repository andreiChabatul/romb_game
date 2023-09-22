import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { ChangeModal, DiceRool } from 'src/store/actions';
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
    this.susbscription$ = this.isLogin$.subscribe(value => this.isLogin = value);
  }

  actionButton(action: ACTIONS_BUTTON) {
    switch (action) {
      case ACTIONS_BUTTON.CREATE_ROOM:

        break;
      case ACTIONS_BUTTON.NEW_GAME:
        if (this.isLogin) { this.router.navigate(['create-game']) }
        else { this.store.dispatch(new ChangeModal('login')); }
        break;
      case ACTIONS_BUTTON.JOIN_GAME:
        if (this.isLogin) { this.router.navigate(['rooms']) }
        else { this.store.dispatch(new ChangeModal('login')); }
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
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.LIST_ROOM);
        break;
      case ACTIONS_BUTTON.ADD_ROOM:
        this.router.navigate(['create-game']);
        break;
      case ACTIONS_BUTTON.DICE_ROLL:
        this.store.dispatch(new DiceRool(true));
        break;
      default:
        break;
    }


  }

  ngOnDestroy(): void {
    this.susbscription$.unsubscribe();
  }
}
