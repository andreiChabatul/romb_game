import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGame } from './page_game/pageGame.modules';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderModule } from 'src/header/header.module';
import { SharedModule } from 'src/shared/shared.module';
import { appReducers } from 'src/store';
import { PageCreateGame } from 'src/create-game/createGamePage.modules';


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
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
