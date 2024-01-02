import { createSelector } from "@ngrx/store";
import { AppStore, State } from "src/app/types/state";

const select = (state: AppStore) => state.state;

export const selectGameRoom = createSelector(select, (state: State) => state.gameRoom);
export const selectAllPlayerArr = createSelector(select, (state: State) => Object.values(state.gameRoom.players));
export const selectGamePLayer = createSelector(select, (state: State) => state.gameRoom.players[String(state.user.infoUser?.id)]);
export const selectPlayerTurnId = createSelector(select, (state: State) => state.gameRoom.turnId);
export const selectIdRoom = createSelector(select, (state: State) => state.gameRoom.idRoom);
export const selectInsideBoard = createSelector(select, (state: State) => state.gameRoom.insideBoard);
export const selectUser = createSelector(select, (state: State) => state.user);
export const selectInfoUser = createSelector(select, (state: State) => state.user.infoUser);
export const selectModal = createSelector(select, (state: State) => state.modal);
export const selectRooms = createSelector(select, (state: State) => state.rooms);
