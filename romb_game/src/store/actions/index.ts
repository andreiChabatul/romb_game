import { Action } from '@ngrx/store';
import { chatMessage, infoRoom, Player, ResponseAuth, UpdatePlayerPayload, gameCell, infoCellTurn, modal, updateCellCompany, offerDealInfo, infoAuction, gameRoom } from 'src/app/types';
import { controlCompanyState, insideBoardState } from 'src/app/types/state';
import { turnPayload } from 'src/app/types/webSocket';

export enum AppActionTypes {
    CloseModal = '[CLOSE MODAL] CloseModal',
    ChangeModal = '[CHANGE MODAL] ChangeModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
    LoginUser = '[LOGIN USER] LoginUser',
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
};

export class ControlCompany implements Action {
    readonly type = AppActionTypes.ControlCompany;
    constructor(public payload: controlCompanyState) { }
}

export class InfoCellTurnAdd implements Action {
    readonly type = AppActionTypes.InfoCellTurn;
    constructor(public payload: infoCellTurn) { }
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
    constructor(public payload: UpdatePlayerPayload) { }
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
    constructor(public payload: infoRoom[]) { }
}

export class LoginUser implements Action {
    readonly type = AppActionTypes.LoginUser;
    constructor(public payload: Partial<ResponseAuth>) { }
}

export class OpenInfoCell implements Action {
    readonly type = AppActionTypes.OpenInfoCell
    constructor(public payload: number) { }
}

export type ActionUnion =
    CloseModal |
    ChangeModal |
    AddModalError |
    ClearModalError |
    UpdateRooms |
    LoginUser |
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
    EndTurn;