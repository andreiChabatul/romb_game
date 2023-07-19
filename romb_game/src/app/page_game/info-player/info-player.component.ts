import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/types';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.scss']
})
export class InfoPlayerComponent implements OnInit {
  @Input() player: Player;
  srcImg: string;

  ngOnInit(): void {
    this.srcImg = `./../../../assets/${this.player.type}.png`;
  }

}
