import { createSelector } from "@ngrx/store";
import { AppStore, State } from "src/app/types";

const select = (state: AppStore) => state.state;

export const selectAllPlayer = createSelector(select, (state: State) => state.gameRoom.players);
export const selectMessageChat = createSelector(select, (state: State) => state.gameRoom.chat);
export const selectIdRoom = createSelector(select, (state: State) => state.gameRoom.idRoom);
export const selectIsLogin = createSelector(select, (state: State) => state.user.isLogin);
export const selectIdUser = createSelector(select, (state: State) => state.user.idUser);
export const selectUserName = createSelector(select, (state: State) => state.user.nickname);
export const selectModal = createSelector(select, (state: State) => state.modal);
export const selectModalError = createSelector(select, (state: State) => state.modalError);
export const selectRooms = createSelector(select, (state: State) => state.rooms);