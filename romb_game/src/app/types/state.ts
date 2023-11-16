import { GameRoom, InfoRoom, infoCellTurn, modal } from ".";

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
    insideBoard: {
        controlCompany?: controlCompanyState;
        state: insideBoardState,
        infoCellTurn?: infoCellTurn,
        valueSellProfit?: number;
    }
}

export interface AppStore {
    state: State;
}

export type insideBoardState = 'playerInfo' | 'diceRoll' | 'startButtons' | 'infoCellTurn' | 'offerDeal' | 'receiveDeal';
export type controlCompanyState = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany' | undefined;