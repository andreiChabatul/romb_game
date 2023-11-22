import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { gameCell, infoAuction } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-auction-company',
  templateUrl: './auction-company.component.html',
  styleUrls: ['./auction-company.component.scss']
})
export class AuctionCompanyComponent implements OnInit, OnDestroy {

  gameRoom$ = this.store.select(selectGameRoom);
  gameCell: gameCell | null;
  infoAuction: infoAuction | null;
  subscription$: Subscription;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.gameRoom$.subscribe((gameRoom) => {
      this.gameCell = gameRoom.infoAuction ? gameRoom.board[gameRoom.infoAuction?.indexCompany] : null;
      this.infoAuction = gameRoom.infoAuction ? gameRoom.infoAuction : null;
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
