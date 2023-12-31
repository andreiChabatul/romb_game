import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart, InputTextFormOption } from 'src/app/types/components';

@Component({
  selector: 'app-modal-delete-profile',
  templateUrl: './modal-delete-profile.component.html',
  styleUrls: ['./modal-delete-profile.component.scss']
})
export class ModalDeleteProfileComponent {

  deleteButton: ButtonStandart = { action: ACTIONS_BUTTON.DELETE_PROFILE, height: '3.5vw', width: '20vw' };
  deleteProfile: FormGroup;
  inputForm: InputTextFormOption[] = [
    { nameForm: 'nickname', type: 'text' },
    { nameForm: 'password', type: 'password' },
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.deleteProfile = this.fb.group({});
  }

  onSubmit(): void {
    if (this.deleteProfile.invalid) {
      this.deleteProfile.markAllAsTouched()
      return;
    };
    console.log(this.deleteProfile.value)
  }
}
