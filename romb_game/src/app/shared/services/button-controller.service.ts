import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { AppStore } from 'src/app/types';
import { ChangeModal } from 'src/store/actions';
import { selectIsLogin } from 'src/store/selectors';


@Injectable({
  providedIn: 'root'
})
export class ButtonControllerService implements OnInit, OnDestroy {

  susbscription$: Subscription
  isLogin: boolean;
  isLogin$ = this.store.select(selectIsLogin);

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {

    this.susbscription$ = this.isLogin$.subscribe(value => this.isLogin = value);

  }

  actionButton(action: ACTIONS_BUTTON) {
    switch (action) {
      case ACTIONS_BUTTON.CREATE_ROOM:

        break;
      case ACTIONS_BUTTON.NEW_GAME:
        if (this.isLogin) { }
        else { this.store.dispatch(new ChangeModal('login')); }
        break;
      case ACTIONS_BUTTON.JOIN_GAME:
        if (this.isLogin) { }
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

      default:
        break;
    }


  }

  ngOnDestroy(): void {
    this.susbscription$.unsubscribe();
  }
}
