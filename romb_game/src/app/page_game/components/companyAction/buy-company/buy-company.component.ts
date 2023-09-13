import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStore } from 'src/app/types/state';
import { selectSellCompany } from 'src/store/selectors';

@Component({
  selector: 'app-buy-company',
  templateUrl: './buy-company.component.html',
  styleUrls: ['./buy-company.component.scss']
})
export class BuyCompanyComponent implements OnInit {

  sellCompany$ = this.store.select(selectSellCompany);
  subscription$: Subscription;
  indexCompany: number = 0;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.sellCompany$.
      subscribe((infoCompany) =>
        infoCompany ? this.indexCompany = infoCompany.indexCompany : ''
      );
  }
}
