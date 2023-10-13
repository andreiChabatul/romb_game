import { Component, Input } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonControllerService } from '../../services/button-controller.service';


@Component({
  selector: 'app-button-standart',
  templateUrl: './button-standart.component.html',
  styleUrls: ['./button-standart.component.scss']
})
export class ButtonStandartComponent {

  @Input() action: ACTIONS_BUTTON;
  @Input() height: string;
  @Input() width: string;
  fontSize: string = '10px';

  constructor(private readonly buttonControllerService: ButtonControllerService) { }

  handlingClick() {
    this.buttonControllerService.actionButton(this.action);
  }

}
