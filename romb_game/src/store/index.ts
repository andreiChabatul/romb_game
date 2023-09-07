import { AppStore, State } from 'src/app/types';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';

export const stateApp: State = {
    gameRoom: {
        idRoom: '',
        board: [],
        players: [],
        chat: []
    },
    user: {
        idUser: '',
        isLogin: false,
        nickname: ''
    },
    rooms: [],
    modal: {
        type: 'none',
        modalError: ''
    },
    gameProcces: {}
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