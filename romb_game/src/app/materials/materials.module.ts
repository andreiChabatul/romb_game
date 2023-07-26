import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectMaterialComponent } from './component/select-material/select-material.component';
import { InputMaterialComponent } from './component/input-material/input-material.component';

@NgModule({
    declarations: [
        SelectMaterialComponent,
        InputMaterialComponent
    ],
    imports: [
        BrowserModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        SelectMaterialComponent,
        FormsModule,
        ReactiveFormsModule,
        InputMaterialComponent
    ],
    providers: [],
    bootstrap: []
})
export class MaterialsModule { }
