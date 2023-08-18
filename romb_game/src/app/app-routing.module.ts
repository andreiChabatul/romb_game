import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'create-game',
    loadChildren: () =>
      import('./create-game/createGamePage.modules').then((m) => m.PageCreateGame),
  },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./page-room/pageRoom.module').then((m) => m.PageRoomModule),
  },
  {
    path: '**',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
