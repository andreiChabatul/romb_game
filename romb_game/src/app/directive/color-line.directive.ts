import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { stateCell } from '../types';
import { colorPlayerOne } from '../types';
import { colorPlayerTwo } from '../types';

@Directive({
  selector: '[appColorLine]'
})
export class ColorLineDirective implements OnInit {

  @Input() state: stateCell

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    let color: string;
    let isActive: boolean = true;
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
        color = '#00003A';
        break;
      default:
        color = '#D2DDE2';
        zIndex = 0;
        isActive = false;
        event = 'auto';
        break;
    }
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.zIndex = zIndex;
    this.el.nativeElement.style['pointer-events'] = event;
  }

}
