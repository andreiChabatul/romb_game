import { AppStore, State } from 'src/app/types';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';

export const stateApp: State = {
    gameRoom: {
        idRoom: '3213',
        board: [],
        players: [],
        chat: [
            { name: "Andrei", numberPlayer: 1, message: 'privet' }
        ]
    },
    user: {
        idUser: '2',
        isLogin: true,
        nickname: ''
    },
    rooms: [],
    modal: {
        type: 'none',
        modalError: ''
    }
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