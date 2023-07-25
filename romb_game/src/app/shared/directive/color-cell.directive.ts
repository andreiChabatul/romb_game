import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { stateCell } from 'src/app/types';


@Directive({
  selector: '[appColorCell]'
})
export class ColorCellDirective implements OnChanges {

  @Input() occupied: stateCell

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {

    if (this.occupied === 'playerOne' || this.occupied === 'playerTwo') {
      this.el.nativeElement.style.backgroundColor = "#01193D"
    };
  }


}
