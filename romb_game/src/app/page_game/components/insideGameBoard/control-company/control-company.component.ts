import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-control-company',
  templateUrl: './control-company.component.html',
  styleUrls: ['./control-company.component.scss']
})
export class ControlCompanyComponent {

  buttonFinish: ButtonStandart = { action: ACTIONS_BUTTON.END_CONTROL, width: '15vw', height: '6vh', show: true };
  gameRoom$ = this.store.select(selectGameRoom);

  constructor(private store: Store<AppStore>) { }

}
