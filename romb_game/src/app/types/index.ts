export type stateCell = 'border' | playerType;
export type typeCell = 'vertical' | 'horisontal';
export type playerType = 'playerOne' | 'playerTwo' | 'playerThree' | 'playerFour' | 'none';
export type side = 'left' | 'top';

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
}

export interface AppStore {
    state: State;
}

export interface chatMessage {
    name: string;
    playerType: playerType;
    message: string;
}


export interface SelectFormCreateGame {
    nameForm: string;
    namelabel: string;
    
  }



