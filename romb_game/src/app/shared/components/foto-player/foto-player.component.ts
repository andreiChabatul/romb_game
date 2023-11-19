import { Component, Input } from '@angular/core';
import { Player } from 'src/app/types';

@Component({
  selector: 'app-foto-player',
  templateUrl: './foto-player.component.html',
  styleUrls: ['./foto-player.component.scss']
})
export class FotoPlayerComponent {

  @Input() player: Player | null;
  @Input() size: string;

}
