import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { InputTextFormOption, SelectFormOption } from 'src/app/types';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';

@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CreateGameFormComponent {

  inputForm: InputTextFormOption[] = [
    { nameForm: 'roomName', namelabel: 'NameRoom', type: 'text' }
  ]

  selectsForm: SelectFormOption[] = [
    { nameForm: 'typeGame', namelabel: 'Type Game', optionSelect: ['Square', 'Rectangle', 'Rhombus', 'Random'] },
    { nameForm: 'players', namelabel: 'Number of Players', optionSelect: ['Two', 'Three', 'Four'] },
    { nameForm: 'size', namelabel: 'Field Size', optionSelect: ['5x5', '6x6', '7x7', '8x8', '9x9', '10x10', '11x11', '12x12'] },
    { nameForm: 'visibility', namelabel: 'Visibility Room', optionSelect: ['Visible to everyone', 'Access by idRoom'] }
  ]
  createGame: FormGroup;
  textButton = ACTIONS_BUTTON.CREATE_ROOM;

  constructor(private fb: FormBuilder,
    private webSocketController: WebSocketController,
    private router: Router) {
    this.createForm();
  }

  private createForm(): void {
    this.createGame = this.fb.group({});
  }

  onSubmit(): void {
    if (this.createGame.invalid) {
      this.createGame.markAllAsTouched()
      return;
    }
    this.webSocketController.createGame({
      roomName: this.createGame.value['roomName'].value,
      players: this.createGame.value['players'].value,
      typeGame: this.createGame.value['typeGame'].value,
      size: this.createGame.value['size'].value,
      visibility: this.createGame.value['visibility'].value
    });
    this.router.navigate(['game']);
  }
}



