import { Action } from '@ngrx/store';
import { Player } from 'src/app/types';

export enum AppActionTypes {
    AddPlayers = '[PLAYERS ADD] AddPlayer',
};

export class AddPlayers implements Action {
    readonly type = AppActionTypes.AddPlayers;
    constructor(public payload: Player[]) { }
}



export type ActionUnion = AddPlayers;