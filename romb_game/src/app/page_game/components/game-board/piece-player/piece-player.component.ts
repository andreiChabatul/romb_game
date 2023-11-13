import { AnimationEvent, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
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
          left: '{{coorX}}vw',
        }), { params: { coorX: coorInitX } }),
      transition('* => X', animate('0.3s ease-in-out')),
    ]),
    trigger('moveY', [
      state('Y',
        style({
          top: '{{coorY}}vw',
        }), { params: { coorY: coorInitY } }),
      transition('* => Y', animate('0.3s ease-in-out')),
    ]),
    trigger('rotate', [
      state('deg0',
        style({
          transform: 'rotate(0)',
        })),
      state('deg90',
        style({
          transform: 'rotate(90deg)',
        })),
      transition('* => *', animate('500ms linear')),
    ],
    )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PiecePlayerComponent implements OnInit, OnChanges {

  @Input() player: Player;
  @Input() index: number;
  changePosition: number;
  coorX: number;
  coorY: number;
  gridArea: string;
  moveX: 'X' | '';
  moveY: 'Y' | '';
  _rotate: 'deg0' | 'deg90';

  ngOnInit(): void {
    this._rotate = 'deg0';
    this.moveX = '';
    this.moveY = '';
    this.coorX = coorInitX;
    this.coorY = coorInitY;
    this.gridArea = gridArea[this.index]
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.player.prison) {
      let prevPosition: number = 0;

      for (let propName in changes) {
        const chng = changes[propName];
        prevPosition = chng.previousValue ? chng.previousValue.cellPosition : 0;
      }

      this.changePosition = this.player.cellPosition - prevPosition;
      this.changePosition += (this.changePosition < 0) ? MAX_INDEX_CELL_BOARD : 0;
      this.changePosition > 0 ? this.step() : '';
    }
  }

  animEndX(): void {
    this.moveX = '';
    (this.coorX === coorEndX && this.coorY === coorInitY) ||
      (this.coorX === coorInitX && this.coorY === coorEndY)
      ? this._rotate = 'deg90'
      : '';
      console.log('end x 1')
  }

  animEndY() {
    this.moveY = '';
    (this.coorY === coorEndY && this.coorX === coorEndX) ||
      (this.coorX === coorInitX && this.coorY === coorInitY)
      ? this._rotate = 'deg0'
      : '';
      console.log('2')
  }

  animEndRotate(event: AnimationEvent) {
    this.step();
    console.log('3')
  }

  step(): void {
    if (this.coorX < coorEndX && this.coorY === coorInitY) {
      this.moveRight();
    }
    else if (this.coorX === coorEndX && this.coorY < coorEndY) {
      this.moveDown();
    }
    else if (this.coorX > coorInitX && this.coorY === coorEndY) {
      this.moveLeft();
    }
    else if (this.coorX === coorInitX && this.coorY > coorInitY) {
      this.moveTop();
    };
  }

  moveRight(): void {
    while (this.changePosition > 0 && this.coorX !== coorEndX) {
      this.changePosition -= 1;
      (this.coorX === coorInitX) ? this.coorX += stepX / 2 : '';
      const newCoorX = this.coorX + stepX;
      ((newCoorX + coorInitX) < coorEndX)
        ? this.coorX = newCoorX
        : this.coorX = coorEndX;
    }
    this.moveX = 'X';
  }

  moveLeft(): void {
    while (this.changePosition > 0 && this.coorX !== coorInitX) {
      this.changePosition -= 1;
      (this.coorX === coorEndX) ? this.coorX -= stepX / 2 : '';
      const newCoorX = this.coorX - stepX;
      ((newCoorX - (stepX / 2)) > coorInitX)
        ? this.coorX = newCoorX
        : this.coorX = coorInitX;
    }
    this.moveX = 'X';
  }

  moveDown(): void {
    while (this.changePosition > 0 && this.coorY !== coorEndY) {
      this.changePosition -= 1;
      (this.coorY === coorInitY) ? this.coorY += stepY / 2 : '';
      const newCoorY = this.coorY + stepY;
      ((newCoorY + (stepY / 2)) < coorEndY)
        ? this.coorY = newCoorY
        : this.coorY = coorEndY;
    }
    this.moveY = 'Y';
  }

  moveTop(): void {
    while (this.changePosition > 0 && this.coorY !== coorInitY) {
      this.changePosition -= 1;
      (this.coorY === coorEndY) ? this.coorY -= stepY / 2 : '';
      const newCoorY = this.coorY - stepY;
      (newCoorY - (stepY / 2) > coorInitY)
        ? this.coorY = newCoorY
        : this.coorY = coorInitY;
    }
    this.moveY = 'Y';
  }

  // movePrison(): void {
  //   this.coorX = coorEndX;
  //   setTimeout(() => {
  //     this.coorY = coorInitY;
  //   }, 500);
  // }
}
