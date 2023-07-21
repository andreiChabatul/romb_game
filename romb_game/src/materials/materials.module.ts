import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';


@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule



    ],
    exports: [MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatSelectModule],
    providers: [],
    bootstrap: []
})
export class MaterialsModule { }
