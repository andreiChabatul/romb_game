import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-standart',
  templateUrl: './button-standart.component.html',
  styleUrls: ['./button-standart.component.scss']
})
export class ButtonStandartComponent {

  @Input() text: string;
  @Input() height: string;
  @Input() width: string;



  handlingClick() {
    console.log(this.text)
  }

}
