
import { createSelector } from "@ngrx/store";
import { AppStore, gameRoom, modalStore, userStore } from "src/app/types/state";

const select = (state: AppStore) => state;
const selectmodal = (state: AppStore) => state.modalStore;
const selectuser = (state: AppStore) => state.userStore;
const selectGame = (state: AppStore) => state.gameStore;

export const selectModal = createSelector(selectmodal, (state: modalStore) => state);
export const selectUser = createSelector(selectuser, (state: userStore) => state);
export const selectInfoUser = createSelector(selectuser, (state: userStore) => state.infoUser);
export const selectRooms = createSelector(select, (state: AppStore) => state.roomsStore);
export const selectGameRoom = createSelector(selectGame, (state: gameRoom) => state);
export const selectAllPlayerArr = createSelector(selectGame, (state: gameRoom) => Object.values(state.players));
export const selectGamePLayer = createSelector(selectGame, (state: gameRoom) => state.players['String(state.user.infoUser?.id)']);
export const selectPlayerTurnId = createSelector(selectGame, (state: gameRoom) => state.turnId);
export const selectIdRoom = createSelector(selectGame, (state: gameRoom) => state.idRoom);
