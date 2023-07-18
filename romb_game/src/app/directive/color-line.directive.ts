import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { stateCell } from '../types';
import { colorPlayerOne, colorPlayerTwo } from '../const';

@Directive({
  selector: '[appColorLine]'
})
export class ColorLineDirective implements OnChanges {

  @Input() state: stateCell

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    let color: string;
    let zIndex: number = 1;
    let event = 'none';

    switch (this.state) {
      case 'playerOne':
        color = colorPlayerOne;
        break;
      case 'playerTwo':
        color = colorPlayerTwo;
        break;
      case 'border':
        color = '#ECFAFB';
        break;
      default:
        color = '#006AC9';
        zIndex = 0;
        event = 'auto';
        break;
    }
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.zIndex = zIndex;
    this.el.nativeElement.style['pointer-events'] = event;
  }

}
