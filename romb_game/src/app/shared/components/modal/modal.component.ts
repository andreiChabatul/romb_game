import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types';
import { CloseModal } from 'src/store/actions';
import { selectModal, selectModalError } from 'src/store/selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  modal$ = this.store.select(selectModal);
  modalError$ = this.store.select(selectModalError);

  constructor(private readonly store: Store<AppStore>) { }

  closeModal() {
    this.store.dispatch(new CloseModal());
  }

}
