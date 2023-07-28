import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGame } from './page_game/pageGame.modules';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderModule } from 'src/header/header.module';
import { appReducers } from 'src/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageCreateGame } from './create-game/createGamePage.modules';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageGame,
    PageCreateGame,
    HeaderModule,
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
