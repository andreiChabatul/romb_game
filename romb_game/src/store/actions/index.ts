import { Action } from '@ngrx/store';
import { CompanyInfoBuy, GameRoom, InfoRoom, ResponseAuth, modal } from 'src/app/types';

export enum AppActionTypes {
    UpdateGameRoom = '[UPDATE GAME ROOM] UpdateGameRoom',
    CloseModal = '[CLOSE MODAL] CloseModal',
    ChangeModal = '[CHANGE MODAL] ChangeModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
    LoginUser = '[LOGIN USER] LoginUser',
    OpenInfoCell = '[OPEN INFO CELL] OpenInfoCell',
    AuctionCompany = '[AUCTION COMPANY] AuctionCompany',
    SellCompany = '[SELL COMPANY] SellCompany',
    ClearSellCompany = '[CLEAR SELL COMPANY] ClearSellCompany',
    UpdateAuctionCompany = '[UPDATE AUCTION COMPANY] UpdateAuctionCompany',
};

export class SellCompany implements Action {
    readonly type = AppActionTypes.SellCompany;
    constructor(public payload: CompanyInfoBuy) { }
}

export class UpdateAuctionCompany implements Action {
    readonly type = AppActionTypes.UpdateAuctionCompany;
}

export class ClearSellCompany implements Action {
    readonly type = AppActionTypes.ClearSellCompany;
}

export class UpdateGameRoom implements Action {
    readonly type = AppActionTypes.UpdateGameRoom;
    constructor(public payload: GameRoom) { }
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
    constructor(public payload: InfoRoom[]) { }
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
    UpdateGameRoom |
    CloseModal |
    ChangeModal |
    AddModalError |
    ClearModalError |
    UpdateRooms |
    LoginUser |
    OpenInfoCell |
    ClearSellCompany |
    SellCompany |
    UpdateAuctionCompany;