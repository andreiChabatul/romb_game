import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectFormCreateGame } from 'src/app/types';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-create-game',
  templateUrl: './select-create-game.component.html',
  styleUrls: ['./select-create-game.component.scss']
})
export class SelectCreateGameComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  @Input() parentForm: FormGroup;
  @Input() optionForm: SelectFormCreateGame;
  selectForm: FormGroup;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngOnInit(): void {
    this.parentForm.addControl(this.optionForm.nameForm, this.selectForm);
  }
}
