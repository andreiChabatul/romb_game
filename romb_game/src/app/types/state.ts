import { CompanyInfoBuy, GameRoom, InfoRoom, infoCellTurn, modal } from ".";

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
        isBuyStock: boolean;
        isSellStock: boolean;
        isPledgeCompany: boolean;
        isBuyOutCompany: boolean;
    },
    insideBoardState: {
        isDiceRoll: boolean,
        isButtons: boolean,
    },
    infoCellTurn?: infoCellTurn,
    sellCompany?: CompanyInfoBuy
}

export interface AppStore {
    state: State;
}