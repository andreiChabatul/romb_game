import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectFormCreateGame } from 'src/app/types';



@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CreateGameFormComponent {

  selectsForm: SelectFormCreateGame[] = [
    { nameForm: 'typeGame', namelabel: 'Type Game' }
  ]
  createGame: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.createGame = this.fb.group({
      emailFormControl: '',
      typeField: FormGroup
    });
  }


}
