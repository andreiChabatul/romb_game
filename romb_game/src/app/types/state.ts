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
        infoUser?: infoUser;
    };
    gameRoom: GameRoom;
    insideBoard: {
        controlCompany?: controlCompanyState;
        state: insideBoardState,
        infoCellTurn?: infoCellTurn,
    }
}

export interface AppStore {
    state: State;
}

export type statUser = {
    totalGame: number;
    winGame: number;
}

export type infoUser = {
    statUser: statUser;
    nickname: string;
    idUser: string;
}

export type insideBoardState = 'playerInfo' | 'diceRoll' | 'startButtons' | 'infoCellTurn' | 'offerDeal' | 'receiveDeal' | 'auction';
export type controlCompanyState = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany' | undefined;