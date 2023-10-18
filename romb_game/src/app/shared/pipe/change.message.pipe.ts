import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { chatMessage } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectAllPlayer, selectGameRoom } from 'src/store/selectors';

@Pipe({
    name: 'changeMessage'
})
export class ChangeMessagePipe implements PipeTransform {

    players$ = this.store.select(selectAllPlayer);
    gameRoom$ = this.store.select(selectGameRoom);

    constructor(private store: Store<AppStore>) { }

    transform(value: string, chatMessage: chatMessage): Observable<string> {

        return this.players$.pipe(
            mergeMap((players) => this.gameRoom$.pipe(
                map((gameRoom) => {
                    console.log(chatMessage)
                    let resultString = value;

                    resultString = (chatMessage.playerId && players[chatMessage.playerId])
                        ? resultString.replaceAll('$PLAYER$', players[chatMessage.playerId].name)
                        : resultString;

                    resultString = (chatMessage.cellId !== undefined && gameRoom.board[chatMessage.cellId])
                        ? resultString.replaceAll('$CELLNAME$', gameRoom.board[chatMessage.cellId].nameCell.toUpperCase())
                        : resultString;

                    resultString = chatMessage.valueroll
                        ? resultString.replaceAll('$VALUEROLL$', String(chatMessage.valueroll))
                        : resultString;

                    return resultString;
                }
                )
            )
            ))
    }
}
