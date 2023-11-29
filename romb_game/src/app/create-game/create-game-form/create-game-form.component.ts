import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { ButtonStandart, InputTextFormOption, SelectFormOption } from 'src/app/types/components';
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
    {
      nameForm: 'players',
      namelabel: 'Number of Players',
      optionSelect: [
        { option: 'Two', value: 2 },
        { option: 'Three', value: 3 },
        { option: 'Four', value: 4 },
        { option: 'Five', value: 5 },
        { option: 'Six', value: 6 },
        { option: 'Seven', value: 7 },
        { option: 'Eight', value: 8 }
      ]
    },
    {
      nameForm: 'runningTime',
      namelabel: 'Running Time',
      optionSelect: [
        { option: '5s', value: 5000 },
        { option: '30s', value: 30000 },
        { option: '1min', value: 60000 },
        { option: '2min', value: 120000 },
        { option: '3min', value: 180000 },
        { option: '4min', value: 240000 },
        { option: '5min', value: 300000 },
      ]
    }
  ]
  createGame: FormGroup;
  textButton: ButtonStandart = { action: ACTIONS_BUTTON.CREATE_ROOM, height: '60px', width: '230px', show: true };

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
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_ROOM, {
      action: 'create',
      gameCreate: {
        roomName: this.createGame.value['roomName'].value,
        maxPlayers: this.createGame.value['players'].value,
        timeTurn: this.createGame.value['runningTime'].value,
      }
    });
    this.router.navigate(['rooms']);
  }
}



