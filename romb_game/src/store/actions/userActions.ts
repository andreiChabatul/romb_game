import { createAction, props } from '@ngrx/store';
import { infoUser } from 'src/app/types/state';

export enum userActionsTypes {
    LoginUser = '[LOGIN USER] LoginUser',
    LogoutUser = '[LOGOUT USER] LogoutUser',
};

export const logoutUser = createAction(userActionsTypes.LogoutUser);
export const loginUser = createAction(userActionsTypes.LoginUser,
    props<{ payload: Partial<infoUser> }>()
);
