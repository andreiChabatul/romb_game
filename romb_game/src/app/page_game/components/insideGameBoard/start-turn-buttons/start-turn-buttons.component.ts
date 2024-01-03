import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap, map, take } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGamePlayer, selectGameRoom, selectUser } from 'src/store/selectors';

@Component({
  selector: 'app-start-turn-buttons',
  templateUrl: './start-turn-buttons.component.html',
  styleUrls: ['./start-turn-buttons.component.scss']
})
export class StartTurnButtonsComponent implements OnInit {

  user$ = this.store.select(selectUser);
  gameRoom$ = this.store.select(selectGameRoom);
  player$ = this.store.select(selectGamePlayer);

  buttons: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.DICE_ROLL, width: '18vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.OFFER_DEAL, width: '18vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.BUY_STOCK, width: '18vw', height: '7vh', show: false },
    { action: ACTIONS_BUTTON.BUY_OUT_COMPANY, width: '18vw', height: '7vh', show: false },
  ]

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.user$.pipe(
      take(1),
      mergeMap((user => this.gameRoom$.pipe(
        
        map((gameRoom) => {
          gameRoom.board.forEach((cell) => {
            if (cell.company?.owned === user.infoUser?.id) {
              cell.company?.isMonopoly ? this.buttons[2].show = true : '';
              cell.company?.isPledge ? this.buttons[3].show = true : '';
            }
          });
        }
        )
      )))
    ).subscribe();
  }

}
