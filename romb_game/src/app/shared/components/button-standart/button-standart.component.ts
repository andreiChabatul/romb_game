import { Component, Input } from '@angular/core';
import { ButtonControllerService } from '../../services/button-controller.service';
import { ButtonStandart } from 'src/app/types/components';

@Component({
  selector: 'app-button-standart',
  templateUrl: './button-standart.component.html',
  styleUrls: ['./button-standart.component.scss']
})
export class ButtonStandartComponent {

  @Input() button: ButtonStandart;

  constructor(private readonly buttonControllerService: ButtonControllerService) { }

  handlingClick() {
    this.buttonControllerService.actionButton(this.button.action);
  }

}
