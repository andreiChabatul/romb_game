import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, InfoCellCompany } from 'src/app/types';
import { selectIndexCell } from 'src/store/selectors';
import { HttpClient } from '@angular/common/http';
import { Subscription, concatMap, map } from 'rxjs';

@Component({
  selector: 'app-modal-info-cell',
  templateUrl: './modal-info-cell.component.html',
  styleUrls: ['./modal-info-cell.component.scss']
})
export class ModalInfoCellComponent implements OnInit, OnDestroy {

  info: InfoCellCompany;
  subscription$: Subscription;
  private jsonPath = '/assets/data/dbInfoCell.json';

  constructor(private store: Store<AppStore>, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.subscription$ = this.httpClient.get<InfoCellCompany[]>(this.jsonPath).pipe(
      concatMap((value) => this.store.select(selectIndexCell).pipe(
        map((index) =>
          (typeof (index) === 'number' && index >= 0) ? value[index] : value[0]
        )))
    ).subscribe(info => this.info = info);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }


}
