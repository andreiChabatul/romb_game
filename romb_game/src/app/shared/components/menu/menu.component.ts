import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { AppStore } from 'src/app/types/state';
import { OpenModal } from 'src/store/actions';
import { selectIdRoom, selectInfoUser } from 'src/store/selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() size: string;

  activeLang: string;
  infoUser$ = this.store.select(selectInfoUser);
  idRoom$ = this.store.select(selectIdRoom);

  constructor(
    private store: Store<AppStore>,
    private authService: AuthService,
    private translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    this.activeLang = this.translocoService.getActiveLang();
  }

  changeLang(lang: string): void {
    localStorage.setItem('langMonopoly', lang);
    this.translocoService.setActiveLang(lang);
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
