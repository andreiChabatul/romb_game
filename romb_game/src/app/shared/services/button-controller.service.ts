import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { AppStore } from 'src/app/types';
import { ChangeModal } from 'src/store/actions';


@Injectable({
  providedIn: 'root'
})
export class ButtonControllerService {

  constructor(private store: Store<AppStore>) { }

  actionButton(action: ACTIONS_BUTTON) {
    switch (action) {
      case ACTIONS_BUTTON.CREATE_ROOM:
        console.log('createRoom')
        break;
      case ACTIONS_BUTTON.NEW_GAME:
        console.log('newGame')
        break;
      case ACTIONS_BUTTON.JOIN_GAME:
        console.log('joinGame')
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
}
