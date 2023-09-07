import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLORS_PLAYER, COLOR_PLAYER_DEFAULT } from 'src/app/const';

@Directive({
    selector: '[appColorShadow]'
})
export class ColorShadowDirective implements OnChanges {

    @Input() numberPlayer: number | undefined;
    colorShadow: string = COLOR_PLAYER_DEFAULT;

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {
        if (typeof (this.numberPlayer) !== 'undefined') {
            this.colorShadow = COLORS_PLAYER[this.numberPlayer]
        }
        this.el.nativeElement.style.boxShadow =
            `inset 0px 0px 81px 17px ${this.colorShadow}, 0px 0px 20px 4px ${this.colorShadow}`;
    }
}