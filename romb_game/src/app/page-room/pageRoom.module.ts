import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { SharedModule } from '../shared/shared.module';
import { PageRoomComponent } from './pages/page-room.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { PageRoomSearchComponent } from './components/page-room-search/page-room-search.component';

@NgModule({
    declarations: [
        PageRoomComponent,
        RoomItemComponent,
        PageRoomSearchComponent

    ],
    imports: [
        BrowserModule,
        SharedModule,
        MaterialsModule,
    ],
    exports: [PageRoomComponent],
    providers: [],
    bootstrap: []
})
export class PageRoomModule { }
