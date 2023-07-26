import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    FormControl,
    FormGroupDirective,
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    Validators,

} from '@angular/forms';
import { SelectMaterialComponent } from './component/select-material/select-material.component';


@NgModule({
    declarations: [
        SelectMaterialComponent

    ],
    imports: [
        BrowserModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [MatInputModule,
        MatFormFieldModule,
        SelectMaterialComponent,
        FormsModule,
        ReactiveFormsModule],
    providers: [],
    bootstrap: []
})
export class MaterialsModule { }
