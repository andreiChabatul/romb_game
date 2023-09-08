import { CompanyInfoAuction, CompanyInfoBuy, GameRoom, InfoRoom, modal } from ".";

export interface State {

    modal: {
        type: modal,
        modalError: string;
        payload?: number
    };
    rooms: InfoRoom[];
    user: {
        isLogin: boolean;
        nickname: string;
        idUser: string;
    };
    gameRoom: GameRoom;
    gameProcces: {
        sellCompany?: CompanyInfoBuy
        auctionCompany?: CompanyInfoAuction
    }
}

export interface AppStore {
    state: State;
}