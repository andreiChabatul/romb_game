import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { stateCell } from '../types';
import { colorPlayerOne, colorPlayerTwo } from '../const';

@Directive({
  selector: '[appColorCell]'
})
export class ColorCellDirective implements OnChanges {

  @Input() occupied: stateCell

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {

    if (this.occupied === 'playerOne' || this.occupied === 'playerTwo') {
      this.el.nativeElement.style.backgroundColor = "#D1E3E7"
      this.occupied === 'playerOne'
        ? this.el.nativeElement.style.color = colorPlayerOne
        : this.el.nativeElement.style.color = colorPlayerTwo
    };
  }


}
