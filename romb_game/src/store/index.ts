import { AppStore, State } from 'src/app/types/state';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';
import { gameRoom } from 'src/app/types';

export const stateApp: State = {
    insideBoard: {
        state: 'playerInfo',
    },
    gameRoom: {} as gameRoom,
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