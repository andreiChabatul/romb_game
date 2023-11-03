import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextFormOption } from 'src/app/types/components';

@Component({
  selector: 'app-input-material',
  templateUrl: './input-material.component.html',
  styleUrls: ['./input-material.component.scss']
})
export class InputMaterialComponent {

  @Input() parentForm: FormGroup;
  @Input() optionForm: InputTextFormOption;
  inputForm: FormGroup;
  type: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.inputForm = this.fb.group({
      value: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.type = this.optionForm.type;
    this.parentForm.addControl(this.optionForm.nameForm, this.inputForm);
  }

  get _value() {
    return this.inputForm.get('value');
  }

  hidePasword() {
    this.type === 'password' ? this.type = 'text' : this.type = 'password';
  }
}
