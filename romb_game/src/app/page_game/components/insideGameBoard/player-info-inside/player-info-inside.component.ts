import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGamePlayer, selectGameRoom, selectInfoUser } from 'src/store/selectors';

@Component({
  selector: 'app-player-info-inside',
  templateUrl: './player-info-inside.component.html',
  styleUrls: ['./player-info-inside.component.scss']
})
export class PlayerInfoInsideComponent {

  infoUser$ = this.store.select(selectInfoUser);
  player$ = this.store.select(selectGamePlayer);
  gameRoom$ = this.store.select(selectGameRoom);
  leaveGameButton: ButtonStandart = { action: ACTIONS_BUTTON.LEAVE_GAME, width: '15vw', height: '3vw' };

  constructor(private store: Store<AppStore>) { }

  amountCompany(): Observable<number> {
    return this.gameRoom$.pipe(
      mergeMap((gameRoom => this.infoUser$.pipe(
        map((infoUser) =>
          gameRoom?.board?.reduce((res, cell) =>
            res + ((cell.company && cell.company.owned === infoUser?.id) ? 1 : 0), 0)
        )
      )))
    )
  }

}
