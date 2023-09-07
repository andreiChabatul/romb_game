import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types';
import { selectAuctionCompany } from 'src/store/selectors';

@Component({
  selector: 'app-buy-company',
  templateUrl: './buy-company.component.html',
  styleUrls: ['./buy-company.component.scss']
})
export class BuyCompanyComponent {

  auctionCompany$ = this.store.select(selectAuctionCompany);

  constructor(private store: Store<AppStore>) { }

}
