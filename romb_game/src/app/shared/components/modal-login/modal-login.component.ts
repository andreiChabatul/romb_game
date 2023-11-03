import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart, InputTextFormOption } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { ChangeModal } from 'src/store/actions';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  inputForm: InputTextFormOption[] = [
    { nameForm: 'nickname', namelabel: 'Nickname', type: 'text' },
    { nameForm: 'password', namelabel: 'Password', type: 'password' }
  ]
  loginForm: FormGroup;
  textButton: ButtonStandart = { action: ACTIONS_BUTTON.LOGIN, height: '60px', width: '230px', show: true };

  constructor(private fb: FormBuilder, private store: Store<AppStore>) {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({});
  }

  registerOpen() {
    this.store.dispatch(new ChangeModal('register'));
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return;
    }
    console.log('htubcnhfwbz')
  }
}
