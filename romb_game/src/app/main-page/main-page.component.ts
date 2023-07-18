import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from '../const/enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  buttons = [ACTIONS_BUTTON.NEW_GAME, ACTIONS_BUTTON.JOIN_GAME];

}
