import { Action } from '@ngrx/store';
import { chatMessage, infoRoom, ResponseAuth, infoCellTurn, modal, updateCellCompany, offerDealInfo, infoAuction, gameRoom, updatePlayer } from 'src/app/types';
import { controlCompanyState, infoUser, insideBoardState, lang } from 'src/app/types/state';
import { turnPayload } from 'src/app/types/webSocket';

export enum AppActionTypes {
    CloseModal = '[CLOSE MODAL] CloseModal',
    OpenModal = '[OPEN MODAL] OpenModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
    LoginUser = '[LOGIN USER] LoginUser',
    LogoutUser = '[LOGOUT USER] LogoutUser',
    OpenInfoCell = '[OPEN INFO CELL] OpenInfoCell',
    ControlInsideBoard = '[CONTROL INSIDE BOARD] ControlInsideBoard',
    ControlCompany = '[CONTROL COMPANY] ControlCompany',
    InfoCellTurn = '[INFO CELL TURN] InfoCellTurn',
    UpdateChatRoom = '[UPDATE CHAT ROOM] UpdateChatRoom',
    EndTurn = '[END TURN] EndTurn',
    UpdateCell = '[UPDATE CELL] UpdateCell',
    UpdateInfoPlayer = '[UPDATE Player] UpdateInfoPlayer',
    StartGame = '[START GAME] StartGame',
    UpdateTurn = '[UPDATE TURN] UpdateTurn',
    SetOfferDealInfo = '[SET OFFER DEAL INFO] SetOfferDealInfo',
    InfoAuction = '[INFO AUCTION] InfoAuction',
    EndGame = '[END GAME] EndGame',
    ChangeLanguage = '[CHANGE LANGUAGE] ChangeLanguage'
};

export class ControlCompany implements Action {
    readonly type = AppActionTypes.ControlCompany;
    constructor(public payload: controlCompanyState) { }
}

export class ChangeLanguage implements Action {
    readonly type = AppActionTypes.ChangeLanguage;
    constructor(public payload: lang) { }
}

export class InfoCellTurnAdd implements Action {
    readonly type = AppActionTypes.InfoCellTurn;
    constructor(public payload: infoCellTurn) { }
}
export class EndGame implements Action {
    readonly type = AppActionTypes.EndGame;
    constructor(public payload: string) { }
}

export class InfoAuction implements Action {
    readonly type = AppActionTypes.InfoAuction;
    constructor(public payload: infoAuction) { }
}

export class SetOfferDealInfo implements Action {
    readonly type = AppActionTypes.SetOfferDealInfo;
    constructor(public payload: offerDealInfo) { }
}

export class UpdateTurn implements Action {
    readonly type = AppActionTypes.UpdateTurn;
    constructor(public payload: turnPayload) { }
}

export class UpdateInfoPlayer implements Action {
    readonly type = AppActionTypes.UpdateInfoPlayer;
    constructor(public payload: updatePlayer) { }
}

export class UpdateCell implements Action {
    readonly type = AppActionTypes.UpdateCell;
    constructor(public payload: updateCellCompany) { }
}

export class StartGame implements Action {
    readonly type = AppActionTypes.StartGame;
    constructor(public payload: gameRoom) { }
}

export class EndTurn implements Action {
    readonly type = AppActionTypes.EndTurn;
}

export class ControlInsideBoard implements Action {
    readonly type = AppActionTypes.ControlInsideBoard;
    constructor(public payload: insideBoardState) { }
}

export class UpdateChatRoom implements Action {
    readonly type = AppActionTypes.UpdateChatRoom;
    constructor(public payload: chatMessage) { }
}

export class CloseModal implements Action {
    readonly type = AppActionTypes.CloseModal;
}

export class OpenModal implements Action {
    readonly type = AppActionTypes.OpenModal;
    constructor(public payload: { type: modal, payload?: string | number }) { }
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
    constructor(public payload: infoRoom[]) { }
}

export class LoginUser implements Action {
    readonly type = AppActionTypes.LoginUser;
    constructor(public payload: Partial<infoUser>) { }
}

export class LogoutUser implements Action {
    readonly type = AppActionTypes.LogoutUser;
    constructor() { }
}

export class OpenInfoCell implements Action {
    readonly type = AppActionTypes.OpenInfoCell
    constructor(public payload: number) { }
}

export type ActionUnion =
    CloseModal |
    OpenModal |
    AddModalError |
    ClearModalError |
    UpdateRooms |
    LoginUser |
    LogoutUser| 
    OpenInfoCell |
    ControlInsideBoard |
    InfoCellTurnAdd |
    UpdateChatRoom |
    UpdateCell |
    StartGame |
    UpdateInfoPlayer |
    UpdateTurn |
    SetOfferDealInfo |
    ControlCompany |
    InfoAuction |
    EndTurn |
    ChangeLanguage |
    EndGame;