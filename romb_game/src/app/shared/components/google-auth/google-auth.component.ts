import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASIC_URL } from 'src/app/const';
import { ENDPOINT } from 'src/app/const/enum';
import { ResponseAuth } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { AddModalError } from 'src/store/actions';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent {

  @Input() size: string;

  constructor(private http: HttpClient, private store: Store<AppStore>) { }

  authGoogle(): void {
    window.location.href = 'http://localhost:3000/auth/google'
  }

}
