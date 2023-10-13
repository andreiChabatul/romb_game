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
    insideBoardState: insideBoardState,
    infoCellTurn?: infoCellTurn,
}

export interface AppStore {
    state: State;
}

export type insideBoardState = controlCompanyState | 'playerInfo' | 'diceRoll' | 'startButtons' | 'infoCellTurn' | 'prison';
export type controlCompanyState = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany';