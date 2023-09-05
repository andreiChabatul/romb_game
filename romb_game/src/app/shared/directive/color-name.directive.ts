// import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
// import { colorPlayerFour, colorPlayerOne, colorPlayerThree, colorPlayerTwo } from 'src/app/const';
// import { playerType } from 'src/app/types';

// @Directive({
//   selector: '[appColorName]'
// })
// export class ColorNameDirective implements OnChanges {

//   @Input() playerType: playerType

//   constructor(private el: ElementRef) { }

//   ngOnChanges(): void {
//     let color: string = 'white';

//     switch (this.playerType) {
//       case 'playerOne':
//         color = colorPlayerOne;
//         break;
//       case 'playerTwo':
//         color = colorPlayerTwo;
//         break;
//       case 'playerThree':
//         color = colorPlayerThree;
//         break;
//       case 'playerFour':
//         color = colorPlayerFour;
//         break;
//     }
//     this.el.nativeElement.style.color = color;
//   }
// }
