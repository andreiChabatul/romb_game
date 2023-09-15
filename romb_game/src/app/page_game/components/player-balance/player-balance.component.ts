import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-balance',
  templateUrl: './player-balance.component.html',
  styleUrls: ['./player-balance.component.scss']
})
export class PlayerBalanceComponent implements OnChanges, OnInit {

  @Input() balance: number;
  previous: number;


ngOnInit(): void {
  // console.log(this.balance, 'balance')
}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['balance']['currentValue'])
    // console.log(this.previous = Number(changes['currentValue']))
    // console.log(this.balance);
    // console.log(this.previous, 'previous')
  }


}
