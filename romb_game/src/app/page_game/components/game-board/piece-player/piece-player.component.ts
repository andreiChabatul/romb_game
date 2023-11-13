import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MAX_INDEX_CELL_BOARD } from 'src/app/const';
import { Player } from 'src/app/types';
import { coorEndX, coorEndY, coorInitX, coorInitY, gridArea, stepX, stepY } from './const';

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
      transition('* <=> X', animate('0.4s ease')),
    ]),
    trigger('moveY', [
      state('Y',
        style({
          top: '{{coorY}}vw',
        }), { params: { coorY: coorInitY } }),
      transition('* <=> Y', animate('0.4s ease')),
    ]),
    trigger('moveX', [
      state('prison',
        style({
          top: coorEndX + 'vw',
          left: coorInitY + 'vw'
        })),
      transition('* <=> prison', animate('0.4s ease')),
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
      transition('* <=> *', animate('0.4s ease')),
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
  moveX: 'X' | '' | 'prison';
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

    if (this.player.cellPosition === 12 && this.player.prison) {
      this.moveX = 'prison'
    }
  }

  animEndX(): void {
    this.moveX = '';
    (this.coorX === coorEndX && this.coorY === coorInitY) ||
      (this.coorX === coorInitX && this.coorY === coorEndY)
      ? this._rotate = 'deg90'
      : '';
  }

  animEndY() {
    this.moveY = '';
    (this.coorY === coorEndY && this.coorX === coorEndX) ||
      (this.coorX === coorInitX && this.coorY === coorInitY)
      ? this._rotate = 'deg0'
      : '';
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

  movePrison(): void {
    this.coorX = coorEndX;
    // this.coorY = coorInitY;
  }
}
