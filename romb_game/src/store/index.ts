import { AppStore, State } from 'src/app/types';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';

export const stateApp: State = {
    players: [
        { id: 1, name: "Andrei", total: 625, isTurn: false, type: 'playerOne' },
        { id: 2, name: "Maks", total: 25, isTurn: false, type: 'playerTwo' },
        { id: 3, name: "Oleg", total: 12, isTurn: true, type: 'playerThree' },
        { id: 4, name: "Polina", total: 32, isTurn: false, type: 'playerFour' }
    ],
    chat: [
        { name: "Andrei", playerType: 'playerOne', message: 'privet' },
        { name: "Vas", playerType: 'playerThree', message: 'privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' },
        { name: "Andrei", playerType: 'playerOne', message: 'privet' },
        { name: "Vas", playerType: 'playerThree', message: 'privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' },
        { name: "Andrei", playerType: 'playerOne', message: 'privet' },
        { name: "Vas", playerType: 'playerThree', message: 'privet privet privet privet privet privet privet privet privet privet privet privet privet privet privet privet privet privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' },
        { name: "Andrei", playerType: 'playerOne', message: 'privet' },
        { name: "Vas", playerType: 'playerThree', message: 'privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' },
        { name: "Andrei", playerType: 'playerOne', message: 'privet' },
        { name: "Vas", playerType: 'playerThree', message: 'privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' },
        { name: "Andrei", playerType: 'playerOne', message: 'privet' },
        { name: "Vas", playerType: 'playerThree', message: 'privet' },
        { name: "Olga   ", playerType: 'playerFour', message: 'privet' },
        { name: "Dimon", playerType: 'playerTwo', message: 'privet' }]
};

export const initalState: AppStore = {
    state: stateApp,
};

export function getInitalState(): AppStore {
    return initalState;
}

export const appReducers: ActionReducerMap<AppStore, any> = {
    state: Reducers,
};