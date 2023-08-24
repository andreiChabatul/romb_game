import { Action } from '@ngrx/store';
import { Player, ResponseAuth, RoomsSocket, modal } from 'src/app/types';

export enum AppActionTypes {
    AddPlayers = '[PLAYERS ADD] AddPlayer',
    CloseModal = '[CLOSE MODAL] CloseModal',
    ChangeModal = '[CHANGE MODAL] ChangeModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
    LoginUser = '[LOGIN USER] LoginUser'
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

export class AddModalError implements Action {
    readonly type = AppActionTypes.AddModalError;
    constructor(public payload: string) { }
}

export class ClearModalError implements Action {
    readonly type = AppActionTypes.ClearModalError;
}

export class UpdateRooms implements Action {
    readonly type = AppActionTypes.UpdateRooms;
    constructor(public payload: RoomsSocket[]) { }
}

export class LoginUser implements Action {
    readonly type = AppActionTypes.LoginUser;
    constructor(public payload: Partial<ResponseAuth>) { }
}


export type ActionUnion = AddPlayers | CloseModal | ChangeModal | AddModalError | ClearModalError | UpdateRooms | LoginUser;