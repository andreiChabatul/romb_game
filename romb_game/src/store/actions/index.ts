import { Action } from '@ngrx/store';
import { Player, modal } from 'src/app/types';

export enum AppActionTypes {
    AddPlayers = '[PLAYERS ADD] AddPlayer',
    CloseModal = '[CLOSE MODAL] CloseModal',
    ChangeModal = '[CHANGE MODAL] ChangeModal',
};

export class AddPlayers implements Action {
    readonly type = AppActionTypes.AddPlayers;
    constructor(public payload: Player[]) { }
}

export class CloseModal implements Action {
    readonly type = AppActionTypes.CloseModal;
}

export class ChangeModal implements Action {
    readonly type = AppActionTypes.ChangeModal;
    constructor(public payload: modal) { }
}


export type ActionUnion = AddPlayers | CloseModal | ChangeModal;