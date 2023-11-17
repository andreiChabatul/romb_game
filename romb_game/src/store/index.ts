import { AppStore, State } from 'src/app/types/state';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';

export const stateApp: State = {
    gameRoom: {
        idRoom: '',
        board: [],
        players: {},
        chat: [],
        turnId: '',
    },
    insideBoard: {
        state: 'playerInfo',
    },
    user: {
        isLogin: false
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