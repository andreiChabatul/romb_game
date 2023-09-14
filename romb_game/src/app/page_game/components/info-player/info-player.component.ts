import { Component, Input } from '@angular/core';
import { Player } from 'src/app/types';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.scss']
})
export class InfoPlayerComponent {
  @Input() player: Player;
  srcImg: string;

}
