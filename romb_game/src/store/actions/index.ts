import { Action } from '@ngrx/store';
import { Player } from 'src/app/types';

export enum AppActionTypes {
    AddPlayers = '[PLAYERS ADD] AddPlayer',
    CloseModal = '[CLOSE MODAL] CloseModal',
};

export class AddPlayers implements Action {
    readonly type = AppActionTypes.AddPlayers;
    constructor(public payload: Player[]) { }
}

export class CloseModal implements Action {
    readonly type = AppActionTypes.CloseModal;
}



export type ActionUnion = AddPlayers | CloseModal;