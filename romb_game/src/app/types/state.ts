import { CompanyInfoBuy, GameRoom, InfoRoom, modal } from ".";

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
    gameCellState: {
        isDiceRoll: boolean;
        isBuyStock: boolean;
        isSellStock: boolean;
        isPledgeCompany: boolean;
        isBuyOutCompany: boolean;
    }
    sellCompany?: CompanyInfoBuy
}

export interface AppStore {
    state: State;
}