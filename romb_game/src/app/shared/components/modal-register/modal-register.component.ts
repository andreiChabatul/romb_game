import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart, InputTextFormOption } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { ChangeModal } from 'src/store/actions';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalRegisterComponent {

  inputForm: InputTextFormOption[] = [
    { nameForm: 'nickname', namelabel: 'Nickname', type: 'text' },
    { nameForm: 'password', namelabel: 'Password', type: 'password' }
  ]
  registerForm: FormGroup;
  textButton: ButtonStandart = { action: ACTIONS_BUTTON.REGISTER, height: '60px', width: '230px', show: true };

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStore>,
    private authService: AuthService
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.registerForm = this.fb.group({});
  }

  loginOpen() {
    this.store.dispatch(new ChangeModal('login'));
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return;
    }
    this.authService.register({
      nickname: this.registerForm.value.nickname.value,
      password: this.registerForm.value.password.value
    })
  }

}
