import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { AppActionTypes } from '../actions';
import { map, mergeMap } from 'rxjs';
import { selectLang } from '../selectors';
import { AppStore } from 'src/app/types/state';


@Injectable()
export class LangEffects {
    changeLang$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(AppActionTypes.ChangeLanguage),
            mergeMap(() =>
                this.store
                    .select(selectLang)
                    .pipe(map((lang) => this.langService.setActiveLang(lang)))
            )
        ),
        { dispatch: false }
    );

    constructor(private actionUnion$: Actions, private langService: TranslocoService, private store: Store<AppStore>) { }
}
