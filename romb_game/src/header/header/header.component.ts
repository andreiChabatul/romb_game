import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { AppStore } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly store: Store<AppStore>) { }

  buttons = [ACTIONS_BUTTON.INFO, ACTIONS_BUTTON.HELP, ACTIONS_BUTTON.SETTING, ACTIONS_BUTTON.LOG_OUT]

  
}
