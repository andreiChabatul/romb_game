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
        state: insideBoardState,
        infoCellTurn?: infoCellTurn,
        valueSellProfit?: number;
        offer?: {};
    }
}

export interface AppStore {
    state: State;
}

export type insideBoardState =
    controlCompanyState | 'playerInfo' | 'diceRoll' | 'startButtons' | 'infoCellTurn'  | 'offerDeal' | 'receiveDeal';
export type controlCompanyState = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany';