import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as modalActions from '../actions/modalActions';
import * as gameActions from '../actions/gameActions';

@Injectable()
export class OpenModalEffects {
    update$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(gameActions.SetIdRoom),
            map(() => modalActions.OpenModal({ payload: { modalState: 'reconnectGame' } }))
        ));

    constructor(private actionUnion$: Actions) { }
}
