import { Directive, ElementRef, Input } from '@angular/core';
import { colorPlayerOne, colorPlayerTwo, occupied } from '../types';

@Directive({
  selector: '[appColorCell]'
})
export class ColorCellDirective {

  @Input() occupied: occupied

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    let color: string = 'FFFFFF';
    this.occupied === '1' ? color = colorPlayerOne : '';
    this.occupied === '2' ? color = colorPlayerTwo : '';
    this.el.nativeElement.style.backgroundColor = color;

  }

}
