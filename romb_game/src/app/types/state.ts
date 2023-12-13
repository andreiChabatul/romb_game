import { gameRoom, infoRoom, infoCellTurn, modal } from ".";

export interface State {

    modal: {
        type: modal,
        modalError?: string;
        payload?: number | string;
    };
    rooms: infoRoom[];
    user: {
        isLogin: boolean;
        infoUser?: infoUser;
    };
    gameRoom: gameRoom;
    insideBoard: {
        controlCompany?: controlCompanyState;
        state: insideBoardState,
        infoCellTurn?: infoCellTurn,
    }
}

export interface AppStore {
    state: State;
}

export type infoUser = {
    createdAt: Date,
    id: string,
    image: string;
    nickName: string;
    numberGame: number;
    numberWin: number;
}

export type insideBoardState = 'playerInfo' | 'diceRoll' | 'startButtons' | 'infoCellTurn' | 'offerDeal' | 'receiveDeal' | 'auction' | 'none' | 'winner';
export type controlCompanyState = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany' | undefined;