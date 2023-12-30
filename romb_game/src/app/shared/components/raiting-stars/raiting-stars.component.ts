import { Component, Input } from '@angular/core';
import { infoUser } from 'src/app/types/state';

@Component({
  selector: 'app-raiting-stars',
  templateUrl: './raiting-stars.component.html',
  styleUrls: ['./raiting-stars.component.scss']
})
export class RaitingStarsComponent {

  @Input() infoUser: infoUser;
  @Input() width: string;

  calcWidth(): string {
    return ((Number(this.infoUser.numberWin) / Number(this.infoUser.numberGame)) * 100) + '%'
  }

}
