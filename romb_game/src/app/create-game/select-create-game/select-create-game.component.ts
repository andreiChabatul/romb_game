import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectFormCreateGameOption } from 'src/app/types';


@Component({
  selector: 'app-select-create-game',
  templateUrl: './select-create-game.component.html',
  styleUrls: ['./select-create-game.component.scss']
})
export class SelectCreateGameComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() optionForm: SelectFormCreateGameOption;
  selectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.selectForm = this.fb.group({
      value: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.parentForm.addControl(this.optionForm.nameForm, this.selectForm);
  }

  get _value() {
    return this.selectForm.get('value');
  }
}
