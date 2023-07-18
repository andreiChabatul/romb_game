import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  buttons = [ACTIONS_BUTTON.SETTING]

}
