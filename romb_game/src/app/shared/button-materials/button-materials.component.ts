import { Component, Input } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonControllerService } from 'src/app/services/button-controller.service';

@Component({
  selector: 'app-button-materials',
  templateUrl: './button-materials.component.html',
  styleUrls: ['./button-materials.component.scss']
})
export class ButtonMaterialsComponent {
  @Input() action: ACTIONS_BUTTON;
  @Input() width: string;

  constructor(private readonly buttonControllerService: ButtonControllerService) { }

  handlingClick() {
    this.buttonControllerService.actionButton(this.action);
  }

}
