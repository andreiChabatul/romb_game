import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart, textControl } from 'src/app/types';
import { AppStore, controlCompanyState } from 'src/app/types/state';
import { selectInsideBoardState } from 'src/store/selectors';

@Component({
  selector: 'app-control-company',
  templateUrl: './control-company.component.html',
  styleUrls: ['./control-company.component.scss']
})
export class ControlCompanyComponent implements OnInit {

  textControl: textControl = {
    buyStock: 'Выберите на игровом поле акции, которые хотите купить.',
    buyOutCompany: 'Выберите на игровом поле компании, которые хотите выкупить.',
    sellStock: 'Выберите на игровом поле акции, которые хотите продать.',
    pledgeCompany: 'Выберите на игровом поле компании, которые хотите заложить.'
  }
  buttonFinish: ButtonStandart = { action: ACTIONS_BUTTON.END_CONTROL, width: '15vw', height: '6vh' };
  insideBoardState$ = this.store.select(selectInsideBoardState);
  textControl$: Observable<string>;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.textControl$ = this.insideBoardState$.pipe(
      map((action) =>
        (action === 'buyStock' || action === 'buyOutCompany' || action === 'sellStock' || action === 'pledgeCompany')
          ? this.textControl[action]
          : '')
    )
  }

}
