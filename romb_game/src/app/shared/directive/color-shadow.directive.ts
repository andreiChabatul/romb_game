import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLORS_PLAYER, COLOR_PLAYER_DEFAULT } from 'src/app/const';
import { cellDirections } from 'src/app/types';

@Directive({
    selector: '[appColorShadow]'
})
export class ColorShadowDirective implements OnChanges {

    @Input() numberPlayer: number | undefined;
    @Input() directtion: cellDirections;
    colorShadow: string = COLOR_PLAYER_DEFAULT;

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {
        console.log(1)
        if (typeof (this.numberPlayer) !== 'undefined') {
            this.directtion === 'left' || this.directtion === 'right'
                ? this.el.nativeElement.style.boxShadow = `34px 0px 52px -30px ${COLORS_PLAYER[this.numberPlayer]} inset`
                : this.el.nativeElement.style.boxShadow = `0px -34px 52px -30px ${COLORS_PLAYER[this.numberPlayer]} inset`
        }
    }
}