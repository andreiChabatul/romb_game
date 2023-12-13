import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { AppStore, lang } from 'src/app/types/state';
import { ChangeLanguage, OpenModal } from 'src/store/actions';
import { selectIdRoom, selectInfoUser, selectLang, selectUserName } from 'src/store/selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() size: string;

  lang$ = this.store.select(selectLang);
  infoUser$ = this.store.select(selectInfoUser);
  idRoom$ = this.store.select(selectIdRoom);

  constructor(private store: Store<AppStore>, private authService: AuthService) { }


  changeLang(lang: lang): void {
    this.store.dispatch(new ChangeLanguage(lang));
  }

  loginProfile(): void {
    this.store.dispatch(new OpenModal({ type: 'login' }));
  }

  loguotProfile(): void {
    this.authService.logout();
  }

  exitGame(): void {
    this.store.dispatch(new OpenModal({ type: 'exitGame' }));
  }

}
