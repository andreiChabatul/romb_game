import { createReducer, on } from "@ngrx/store";
import * as userActions from '../actions//userActions';
import { userStore } from "src/app/types/state";
import { EMPTY_USER } from "src/app/const";

const initalState: userStore = {
    isLogin: false,
    infoUser: EMPTY_USER // temp
}

export const userReducers = createReducer(initalState,
    on(userActions.logoutUser, (state) => ({ isLogin: false })),
    on(userActions.loginUser, (state, { payload }) => ({ isLogin: true, infoUser: { ...EMPTY_USER, ...payload } }))
)
