import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { InputTextFormOption } from 'src/app/types';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modalRegister.component.html',
  styleUrls: ['./modalRegister.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalRegisterComponent {

  inputForm: InputTextFormOption[] = [
    { nameForm: 'nickname', namelabel: 'Nickname', type: 'text' },
    { nameForm: 'password', namelabel: 'Password', type: 'password' }
  ]
  registerForm: FormGroup;
  textButton = ACTIONS_BUTTON.REGISTER;

  constructor(private fb: FormBuilder,) {
    this.createForm();
  }

  private createForm(): void {
    this.registerForm = this.fb.group({});
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return;
    }
    console.log('htubcnhfwbz')
  }

}
