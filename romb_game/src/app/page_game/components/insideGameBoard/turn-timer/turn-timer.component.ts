import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TIME_TURN_DEFAULT } from 'src/app/const';

@Component({
  selector: 'app-turn-timer',
  templateUrl: './turn-timer.component.html',
  styleUrls: ['./turn-timer.component.scss'],
  animations: [
    trigger('timerAnimation', [
      transition('void => *', [
        style({
          width: '0'
        }),
        animate(10000, style({
          width: '100%'
        })),
      ])
    ])
  ]
})

export class TurnTimerComponent implements OnInit, OnDestroy {

  isActive: boolean;


  ngOnInit(): void {
    this.isActive = true;
  }

  turnEnd(): void {
    if (this.isActive) { console.log('bankrout') }
  }

  ngOnDestroy(): void {
    console.log('delete timer')
    this.isActive = false;
  }



}
