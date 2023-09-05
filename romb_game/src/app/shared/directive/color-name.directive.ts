import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[appColorPlayerText]'
})
export class ColorPlayerDirective implements OnChanges {

    @Input() numberPlayer: number;
    colors = ['#F6E106', '#E20001', '#42DD51', '#0FCBF1']

    constructor(private el: ElementRef) { }

    ngOnChanges(): void {
         const color: string = 'blue';
         console.log(this.numberPlayer)
        this.el.nativeElement.style.color = this.colors[this.numberPlayer] || color;
    }
}