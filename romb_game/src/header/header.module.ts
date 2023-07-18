import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
    declarations: [
        HeaderComponent,
        



    ],
    imports: [
        BrowserModule,
        SharedModule

    ],
    exports: [HeaderComponent],
    providers: [],
    bootstrap: []
})
export class HeaderModule { }
