import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { Button } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectIsLogin } from 'src/store/selectors';

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

  buttons: Button[] = [
    { action: ACTIONS_BUTTON.INFO, width: "45px" },
    { action: ACTIONS_BUTTON.HELP, width: "45px" },
    { action: ACTIONS_BUTTON.SETTING, width: "45px" },
  ]

  constructor(private readonly store: Store<AppStore>) { }

  ngOnInit(): void {
    this.checkGamePage();
    // this.subscriptionTwo$ = this.store.select(selectUserName).subscribe((nickname) => this.nickname = nickname);
    this.subscriptionOne$ = this.store.select(selectIsLogin).subscribe(
      (isLogin) => isLogin
        ? this.buttons[3] = { action: ACTIONS_BUTTON.LOG_OUT, width: "45px" }
        : this.buttons[3] = { action: ACTIONS_BUTTON.LOG_IN, width: "45px" }
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
