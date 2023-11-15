import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ButtonControllerService } from '../../services/button-controller.service';
import { ButtonStandart } from 'src/app/types/components';
import { Subscription, isObservable } from 'rxjs';

@Component({
  selector: 'app-button-standart',
  templateUrl: './button-standart.component.html',
  styleUrls: ['./button-standart.component.scss']
})
export class ButtonStandartComponent implements OnInit, OnDestroy {

  @Input() button: ButtonStandart;
  isShow: boolean;
  subscription$: Subscription;

  constructor(private readonly buttonControllerService: ButtonControllerService) { }

  handlingClick() {
    this.buttonControllerService.actionButton(this.button.action);
  }

  ngOnInit(): void {
    (isObservable(this.button.show))
      ? this.subscription$ = this.button.show.subscribe(show => this.isShow = show)
      : this.isShow = this.button.show;
  }

  ngOnDestroy(): void {
    this.subscription$ ? this.subscription$.unsubscribe() : '';
  }

}
