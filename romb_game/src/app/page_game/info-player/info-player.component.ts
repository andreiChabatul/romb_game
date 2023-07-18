import { Component, Input } from '@angular/core';
import { stateCell } from 'src/app/types';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.scss']
})
export class InfoPlayerComponent {
  @Input() type: stateCell;

}
