export type stateCell = 'none' | 'playerOne' | 'playerTwo' | 'border';
export type typeCell = 'vertical' | 'horisontal';
export type occupied = '1' | '2' | '';

export type side = 'right' | 'left' | 'top' | 'bottom';


export interface Cell {
    indexCell: number;
    rightState: stateCell;
    leftState: stateCell;
    bottomState: stateCell;
    topState: stateCell;
    occupied: occupied;
}

export interface CellClick {
    side: side,
    indexCell: number,

}





//temp//
export const colorPlayerOne = 'rgba(101, 84, 255)';
export const colorPlayerTwo = 'rgba(255, 137, 73)';
