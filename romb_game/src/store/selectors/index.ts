import { createSelector } from "@ngrx/store";
import { AppStore, State } from "src/app/types";

const select = (state: AppStore) => state.state;

export const selectAllPlayer = createSelector(select, (state: State) => state.players);
export const selectMessageChat = createSelector(select, (state: State) => state.chat);