import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLORS_PLAYER, COLOR_PLAYER_DEFAULT } from 'src/app/const';

@Directive({
    selector: '[appColorBackground]'
})
export class ColorBackgroundDirective implements OnChanges {

    @Input() numberPlayer: number;

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {
        this.el.nativeElement.style.background = COLORS_PLAYER[this.numberPlayer] || COLOR_PLAYER_DEFAULT;
    }
}