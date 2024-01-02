import { createAction, props } from '@ngrx/store';
import { infoRoom } from 'src/app/types';
import { infoUser } from 'src/app/types/state';

export enum roomsActionsTypes {
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
};

export const UpdateRooms = createAction(roomsActionsTypes.UpdateRooms,
    props<{ infoRoom: infoRoom[] }>()
);
