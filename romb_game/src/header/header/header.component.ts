import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { AppStore } from 'src/app/types';
import { selectIsLogin } from 'src/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription$: Subscription;

  buttons = [ACTIONS_BUTTON.INFO, ACTIONS_BUTTON.HELP, ACTIONS_BUTTON.SETTING];

  constructor(private readonly store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.store.select(selectIsLogin).subscribe(
      (isLogin) => isLogin
        ? this.buttons[3] = ACTIONS_BUTTON.LOG_OUT
        : this.buttons[3] = ACTIONS_BUTTON.LOG_IN
    )
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
