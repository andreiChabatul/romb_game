export type stateCell = 'border' | playerType;
export type typeCell = 'vertical' | 'horisontal';
export type playerType = 'playerOne' | 'playerTwo' | 'playerThree' | 'playerFour' | 'none';
export type side = 'left' | 'top';
export type modal = 'none' | 'login' | 'register';

export interface Player {
    id: number;
    name: string;
    total: number;
    isTurn: boolean;
    type: playerType;
}

export interface Cell {
    indexCell: number;
    left: stateCell;
    top: stateCell;
    occupied: stateCell;
}

export interface CellClick {
    side: side,
    indexCell: number,
}


export interface State {
    players: Player[];
    chat: chatMessage[];
    isLogin: boolean;
    modal: modal;

}

export interface AppStore {
    state: State;
}

export interface chatMessage {
    name: string;
    playerType: playerType;
    message: string;
}


export interface SelectFormOption {
    nameForm: string;
    namelabel: string;
    optionSelect: string[];
}

export interface InputTextFormOption {
    nameForm: string;
    namelabel: string;
    type: string;
}




