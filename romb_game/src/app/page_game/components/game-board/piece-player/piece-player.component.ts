import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MAX_INDEX_CELL_BOARD } from 'src/app/const';
import { Player } from 'src/app/types';

const coorInitX = 2.6;
const coorInitY = 0;
const coorEndX = 71.4;
const coorEndY = 37.6;
const stepX = 5.3;
const stepY = 4.75;
const gridArea: string[] = ['2/1/2/1', '3/2/3/2', '2/1/2/1', '1/1/1/1', '1/2/1/2', '3/1/3/1', '4/1/4/1', '4/2/4/2'];

@Component({
  selector: 'app-piece-player',
  templateUrl: './piece-player.component.html',
  styleUrls: ['./piece-player.component.scss'],
  animations: [
    trigger('moveX', [
      state('X',
        style({
          transform: 'translateX({{coorX}}vw',
        }), { params: { coorX: coorInitX } }),
      transition('* => *', animate('500ms linear')),
    ]),
    trigger('moveY', [
      state('Y',
        style({
          transform: 'translateY({{coorY}}vw)',
        }), { params: { coorY: coorInitY } }),
      transition('* => *', animate('500ms linear')),
    ])
  ]

})
export class PiecePlayerComponent implements OnInit, OnChanges {

  @Input() player: Player;
  @Input() index: number;
  changePosition: number;
  coorX: number;
  coorY: number;
  rotate: number;
  gridArea: string;
  moveX: 'X' | 'Y' | '';

  ngOnInit(): void {
    this.moveX = 'X';
    this.coorX = coorInitX;
    this.coorY = coorInitY;
    this.rotate = 0;
    this.gridArea = gridArea[this.index]
  }

  ngOnChanges(changes: SimpleChanges): void {
this.moveX = '';
    if (!this.player.prison) {
      const firstStep = this.firstStep().bind(this);
      let prevPosition: number = 0;

      for (let propName in changes) {
        const chng = changes[propName];
        prevPosition = chng.previousValue ? chng.previousValue.cellPosition : 0;
      }

      this.changePosition = this.player.cellPosition - prevPosition;
      this.changePosition += (this.changePosition < 0) ? MAX_INDEX_CELL_BOARD : 0;

      for (let index = 0; index < this.changePosition; index++) {
        firstStep();
      }
    }
  }

  get stateName() {
    return this.moveX;
  }


  firstStep(): () => void {
    if (this.coorX < coorEndX && this.coorY === coorInitY) {
      return this.moveRight;
    }
    else if (this.coorX === coorEndX && this.coorY < coorEndY) {
      return this.moveDown;
    }
    else if (this.coorX > coorInitX && this.coorY === coorEndY) {
      return this.moveLeft;
    }
    else if (this.coorX === coorInitX && this.coorY > coorInitY) {
      return this.moveTop;
    };
    return () => { };
  }

  moveRight(time: number = 0): void {
    (this.coorX === coorInitX) ? this.coorX += stepX / 2 : '';
    const newCoorX = this.coorX + stepX;
    if ((newCoorX + coorInitX) < coorEndX) {
      this.coorX = newCoorX;
    } else {
      this.coorX = coorEndX;
      this.rotate = 90;
      if (this.changePosition > 0) {
        this.moveDown();
      }
    }
    this.moveX = 'X';
  }

  moveLeft(time: number = 0): void {
    (this.coorX === coorEndX) ? this.coorX -= stepX / 2 : '';
    const newCoorX = this.coorX - stepX;
    if ((newCoorX - (stepX / 2)) > coorInitX) {
      this.coorX = newCoorX;
    } else {
      this.coorX = coorInitX;
      this.rotate = 90;
      if (this.changePosition > 0) {
        this.moveTop();
      }
      else if (this.player.cellPosition === 31) {
        setTimeout(() =>
          this.movePrison(), 500);
      }
    }


  }

  moveDown(time: number = 0): void {

    (this.coorY === coorInitY) ? this.coorY += stepY / 2 : '';
    const newCoorY = this.coorY + stepY;
    if (newCoorY + (stepY / 2) < coorEndY) {
      this.coorY = newCoorY;
    } else {
      this.coorY = coorEndY;
      this.rotate = 0;
      if (this.changePosition > 0) {
        this.moveLeft();
      }
    }
    this.moveX = 'Y';
  }

  moveTop(time: number = 0): void {


    (this.coorY === coorEndY) ? this.coorY -= stepY / 2 : '';
    const newCoorY = this.coorY - stepY;
    if (newCoorY - (stepY / 2) > coorInitY) {
      this.coorY = newCoorY;
    } else {
      this.coorY = coorInitY;
      this.rotate = 0;
      if (this.changePosition > 0) {
        this.moveRight();
      }
    }

  }

  movePrison(): void {
    this.coorX = coorEndX;
    setTimeout(() => {
      this.coorY = coorInitY;
    }, 500);
  }
}
