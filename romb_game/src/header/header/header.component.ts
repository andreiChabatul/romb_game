import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { AppStore, ButtonMaterialOption } from 'src/app/types';
import { selectIsLogin } from 'src/store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription$: Subscription;

  buttons: ButtonMaterialOption[] = [
    { action: ACTIONS_BUTTON.INFO, width: "45px", text: "Info" },
    { action: ACTIONS_BUTTON.HELP, width: "45px", text: "Help" },
    { action: ACTIONS_BUTTON.SETTING, width: "45px", text: "Setting" },
  ]

  constructor(private readonly store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.store.select(selectIsLogin).subscribe(
      (isLogin) => isLogin
        ? this.buttons[3] = { action: ACTIONS_BUTTON.LOG_OUT, width: "45px", text: "Exit" }
        : this.buttons[3] = { action: ACTIONS_BUTTON.LOG_IN, width: "45px", text: "Войти" }
    )
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
