import { createReducer, on } from "@ngrx/store";
import * as modalActions from '../actions/modalActions';
import { modalStore } from "src/app/types/state";

const initalState: modalStore = {
    modalState: 'none',
    modalError: ''
}

export const modalReducers = createReducer(initalState,
    on(modalActions.closeModal, (state) => ({ modalState: 'none' })),
    on(modalActions.clearModalError, (state) => ({ ...state, modalError: '' })),
    on(modalActions.openModal, (state, { payload }) => ({ ...payload })),
    on(modalActions.addModalError, (state, { modalError }) => ({ ...state, modalError }))
)
