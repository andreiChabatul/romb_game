import { Component } from '@angular/core';
import { DoneBoard } from 'server_temp/done_board';

export const game = new DoneBoard(15);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'romb_game';
  items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]



  
}
