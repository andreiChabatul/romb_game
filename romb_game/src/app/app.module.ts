import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './cell/cell.component';
import { ColorCellDirective } from './directive/color-cell.directive';
import { ColorLineDirective } from './directive/color-line.directive';



@NgModule({
  declarations: [
    AppComponent,

    GameBoardComponent,
    CellComponent,
    ColorCellDirective,
    ColorLineDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
