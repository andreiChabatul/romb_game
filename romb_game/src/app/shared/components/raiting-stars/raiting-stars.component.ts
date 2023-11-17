import { Component, Input } from '@angular/core';
import { statUser } from 'src/app/types/state';

@Component({
  selector: 'app-raiting-stars',
  templateUrl: './raiting-stars.component.html',
  styleUrls: ['./raiting-stars.component.scss']
})
export class RaitingStarsComponent {

  @Input() statUser: statUser | undefined;
  @Input() width: string;

  calcWidth(): string {
    return ((Number(this.statUser?.winGame) / Number(this.statUser?.totalGame)) * 100) + '%'
  }

}
