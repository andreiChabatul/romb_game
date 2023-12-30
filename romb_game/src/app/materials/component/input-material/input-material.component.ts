import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextFormOption } from 'src/app/types/components';

@Component({
  selector: 'app-input-material',
  templateUrl: './input-material.component.html',
  styleUrls: ['./input-material.component.scss']
})
export class InputMaterialComponent implements OnChanges {

  @Input() parentForm: FormGroup;
  @Input() optionForm: InputTextFormOption;
  inputForm: FormGroup;
  type: string;

  constructor(private fb: FormBuilder) { }

  private createForm(): void {
    const value = this.type === 'color' ? this.randomColor() : ''
    this.inputForm = this.fb.group({
      value: [this.optionForm.defaultValue ? this.optionForm.defaultValue : value, [Validators.required]],
    });
  }

  ngOnChanges(): void {
    this.type = this.optionForm.type;
    this.createForm();
    this.parentForm.addControl(this.optionForm.nameForm, this.inputForm);
  }

  get _value() {
    return this.inputForm.get('value');
  }

  hidePasword() {
    this.type === 'password' ? this.type = 'text' : this.type = 'password';
  }

  randomColor(): string {
    return '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
  }

}
