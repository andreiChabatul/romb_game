import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ControllerActionsService } from 'src/app/services/controller-actions.service';
import { SelectFormCreateGameOption } from 'src/app/types';



@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CreateGameFormComponent {

  selectsForm: SelectFormCreateGameOption[] = [
    { nameForm: 'typeGame', namelabel: 'Type Game', optionSelect: ['Square', 'Rectangle', 'Rhombus', 'Random'] },
    { nameForm: 'players', namelabel: 'Number of Players', optionSelect: ['Two', 'Three', 'Four'] },
    { nameForm: 'size', namelabel: 'Field Size', optionSelect: ['5x5', '6x6', '7x7', '8x8', '9x9', '10x10', '11x11', '12x12'] },
    { nameForm: 'visibility', namelabel: 'Visibility Room', optionSelect: ['Visible to everyone', 'Access by idRoom'] }
  ]
  createGame: FormGroup;
  textButton = ACTIONS_BUTTON.CREATE_ROOM;

  constructor(private fb: FormBuilder, private controllerActionsService: ControllerActionsService) {
    this.createForm();
  }

  private createForm(): void {
    this.createGame = this.fb.group({
      nickname: ['', Validators.required]
    });
  }

  get _nickname() {
    return this.createGame.get('nickname');
  }

  onSubmit(): void {
    if (this.createGame.invalid) {
      this.createGame.markAllAsTouched()
      return;
    }
    this.controllerActionsService.createGame()
    console.log(this.createGame.value['typeGame'].value)
  }
}



