import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonMaterialOption } from 'src/app/types/components';

import { AppStore } from 'src/app/types/state';
import { selectIsLogin, selectUserName } from 'src/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscriptionOne$: Subscription;
  private subscriptionTwo$: Subscription;
  private nickname: string;
  isShow = true;

  buttons: ButtonMaterialOption[] = [
    { action: ACTIONS_BUTTON.INFO, width: "45px", text: "Info" },
    { action: ACTIONS_BUTTON.HELP, width: "45px", text: "Help" },
    { action: ACTIONS_BUTTON.SETTING, width: "45px", text: "Setting" },
  ]

  constructor(private readonly store: Store<AppStore>) { }

  ngOnInit(): void {
    this.checkGamePage();
    // this.subscriptionTwo$ = this.store.select(selectUserName).subscribe((nickname) => this.nickname = nickname);
    this.subscriptionOne$ = this.store.select(selectIsLogin).subscribe(
      (isLogin) => isLogin
        ? this.buttons[3] = { action: ACTIONS_BUTTON.LOG_OUT, width: "45px", text: `Exit ${this.nickname}` }
        : this.buttons[3] = { action: ACTIONS_BUTTON.LOG_IN, width: "45px", text: "Войти" }
    )

  }

  ngOnDestroy(): void {
    this.subscriptionOne$.unsubscribe();
    this.subscriptionTwo$.unsubscribe();
  }


  checkGamePage() {
    const url = window.location.href.split('/').reverse()[0];
    url === 'game' ? this.isShow = false : this.isShow = true;
  }

}
