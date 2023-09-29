import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIndexCell } from 'src/store/selectors';
import { HttpClient } from '@angular/common/http';
import { Subscription, concatMap, map } from 'rxjs';
import { AppStore } from 'src/app/types/state';

@Component({
  selector: 'app-modal-info-cell',
  templateUrl: './modal-info-cell.component.html',
  styleUrls: ['./modal-info-cell.component.scss']
})
export class ModalInfoCellComponent implements OnInit, OnDestroy {


  subscription$: Subscription;
  private jsonPath = '/assets/data/dbInfoCell.json';

  constructor(private store: Store<AppStore>, private httpClient: HttpClient) { }

  ngOnInit(): void {

    
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }


}
