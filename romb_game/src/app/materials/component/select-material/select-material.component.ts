import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectFormCreateGameOption } from 'src/app/types';

@Component({
  selector: 'app-select-material',
  templateUrl: './select-material.component.html',
  styleUrls: ['./select-material.component.scss']
})
export class SelectMaterialComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() optionForm: SelectFormCreateGameOption;
  selectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log(this.optionForm)
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
