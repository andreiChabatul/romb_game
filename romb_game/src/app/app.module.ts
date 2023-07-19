import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageGame } from './page_game/pageGame.modules';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderModule } from 'src/header/header.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageGame,
    HeaderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
