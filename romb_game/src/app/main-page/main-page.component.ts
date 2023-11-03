import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from '../const/enum';
import { ButtonStandart } from '../types/components';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  buttons: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.NEW_GAME, width: '200px', height: '70px', show: true },
    { action: ACTIONS_BUTTON.JOIN_GAME, width: '200px', height: '70px', show: true },
  ];

}
