import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectIdRoom } from 'src/store/selectors';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatInputComponent {

  chatForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private webSocketController: WebSocketController,
    private store: Store<AppStore>
  ) {
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
    this.store.select(selectIdRoom).subscribe((idRoom) => idRoom = idRoom)

    this.webSocketController.sendMessage(
      EACTION_WEBSOCKET.MESSAGE_CHAT,
      {
        message: this.chatForm.get('message')?.value
      }
    )
    this.chatForm.get('message')?.reset();
  } 

}
