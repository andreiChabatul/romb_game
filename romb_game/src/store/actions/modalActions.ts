import { createAction, props } from '@ngrx/store';
import { modalStore } from 'src/app/types/state';

export enum modalActionsTypes {
    CloseModal = '[CLOSE MODAL] CloseModal',
    OpenModal = '[OPEN MODAL] OpenModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
};

export const closeModal = createAction(modalActionsTypes.CloseModal);
export const clearModalError = createAction(modalActionsTypes.ClearModalError);
export const openModal = createAction(modalActionsTypes.OpenModal,
    props<{ payload: modalStore }>()
);
export const addModalError = createAction(modalActionsTypes.AddModalError,
    props<{ modalError?: string }>()
);
