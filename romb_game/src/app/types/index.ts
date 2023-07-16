export type stateCell = 'none' | 'playerOne' | 'playerTwo' | 'border';
export type typeCell = 'vertical' | 'horisontal';
export type occupied = 'X' | 'O' | '';

export type side = 'left' | 'top' ;


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






