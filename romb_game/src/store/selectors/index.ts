import { createSelector } from "@ngrx/store";
import { AppStore, State } from "src/app/types";

const select = (state: AppStore) => state.state;

export const selectAllPlayer = createSelector(select, (state: State) => state.players);
export const selectMessageChat = createSelector(select, (state: State) => state.chat);
export const selectIsLogin = createSelector(select, (state: State) => state.isLogin);
export const selectModal = createSelector(select, (state: State) => state.modal);