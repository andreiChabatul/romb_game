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
                    let resultString = value;

                    resultString = (chatMessage.idUser && players[chatMessage.idUser])
                        ? resultString.replaceAll('$PLAYER$', players[chatMessage.idUser].nickName)
                        : resultString;

                    resultString = (chatMessage.cellId !== undefined && gameRoom.board[chatMessage.cellId])
                        ? resultString
                            .replaceAll('$CELLNAME$', gameRoom.board[chatMessage.cellId].nameCell.toUpperCase())
                            .replaceAll('$PRICE$', String(gameRoom.board[chatMessage.cellId].company?.priceCompany))
                            .replaceAll('$RENT$', gameRoom.board[chatMessage.cellId].company?.countryCompany === 'ukraine'
                                ? String(gameRoom.board[chatMessage.cellId].company?.rentCompany) + '×🎲'
                                : String(gameRoom.board[chatMessage.cellId].company?.rentCompany))
                            .replaceAll('$PLAYER_OWNED$', String(players[String(gameRoom.board[chatMessage.cellId].company?.owned)]?.nickName))
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
