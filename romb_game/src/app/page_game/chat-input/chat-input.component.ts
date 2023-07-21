import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatInputComponent {

  chatForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.chatForm = this.fb.group({
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.chatForm.invalid) {
      this.chatForm.markAllAsTouched();
      return;
    }
    console.log(this.chatForm.get('message'));
  }

  get _message() {
    return this.chatForm.get('message');
  }

}
