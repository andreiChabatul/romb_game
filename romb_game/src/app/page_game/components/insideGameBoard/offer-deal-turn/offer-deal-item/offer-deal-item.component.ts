import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Player, gameCell, offerInfo, offersPerson } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { SetOfferDeal } from 'src/store/actions';
import { selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-offer-deal-item',
  templateUrl: './offer-deal-item.component.html',
  styleUrls: ['./offer-deal-item.component.scss']
})
export class OfferDealItemComponent implements OnInit {

  @Input() idUser: string | null;
  @Input() offersPerson: offersPerson;
  gameRoom$ = this.store.select(selectGameRoom);
  offerInfo: offerInfo = {} as offerInfo;

  constructor(private store: Store<AppStore>) {
    this.formatLabel = this.formatLabel.bind(this);
  }

  ngOnInit(): void {
    this.offerInfo = {
      idPerson: this.idUser ? this.idUser : '',
      indexCompany: [],
      valueMoney: 0
    }
  }

  searchIndexCompany(idCompany: number): number {
    return this.offerInfo.indexCompany.indexOf(idCompany);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      this.valueMoney = value;
      return '$' + Math.round(value);
    }
    return `${value}`;
  }

  set valueMoney(valueMoney: number) {
    this.offerInfo = { ...this.offerInfo, valueMoney };
    this.sendStore();
  }

  set company(idCompany: number) {
    const resultArr = [...this.offerInfo.indexCompany]
    const indexSelect = this.searchIndexCompany(idCompany);
    (indexSelect === -1)
      ? resultArr.push(idCompany)
      : resultArr.splice(indexSelect, 1);
    this.offerInfo = { ...this.offerInfo, indexCompany: [...resultArr] };
    this.sendStore();
  }

  get player(): Observable<Player> {
    return this.gameRoom$.pipe(
      map((gameRoom) => gameRoom.players[String(this.idUser)])
    )
  }

  get companyPlayer(): Observable<gameCell[]> {
    return this.gameRoom$.pipe(
      map((gameRoom) => gameRoom.board.filter((cell) => cell.cellCompany?.owned === this.idUser))
    )
  }

  sendStore(): void {
    this.store.dispatch(new SetOfferDeal({ offersPerson: this.offersPerson, offerInfo: this.offerInfo }));
  }

}
