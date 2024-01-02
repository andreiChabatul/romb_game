import { infoRoom, infoCellTurn, modal, chatMessage, playersGame, gameCell, offerDealInfo, infoAuction } from ".";

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

export type insideBoardState = 'playerInfo' | 'diceRoll' | 'startButtons' | 'infoCellTurn' | 'offerDeal' | 'receiveDeal' | 'auction' | 'winner' | undefined;
export type controlCompanyState = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany' | undefined;

export interface gameRoom {
    chat: chatMessage[];
    idRoom: string;
    players: playersGame;
    board: gameCell[];
    turnId: string;
    timeTurn: number;
    offerDealInfo?: offerDealInfo;
    infoAuction?: infoAuction;
    winner?: string;
    insideBoard?: {
        controlCompany?: controlCompanyState;
        state?: insideBoardState,
        infoCellTurn?: infoCellTurn,
    }
}