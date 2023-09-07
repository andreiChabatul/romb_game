import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { COLORS_PLAYER, COLOR_PLAYER_DEFAULT } from 'src/app/const';

@Directive({
    selector: '[appColorPlayerText]'
})
export class ColorPlayerDirective implements OnChanges {

    @Input() numberPlayer: number;

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {
        this.el.nativeElement.style.color = COLORS_PLAYER[this.numberPlayer] || COLOR_PLAYER_DEFAULT;
    }
}