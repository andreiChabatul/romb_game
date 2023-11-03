import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectMaterialComponent } from './component/select-material/select-material.component';
import { InputMaterialComponent } from './component/input-material/input-material.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SelectMaterialComponent,
        InputMaterialComponent
    ],
    imports: [
        CommonModule ,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatSliderModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        SelectMaterialComponent,
        FormsModule,
        ReactiveFormsModule,
        InputMaterialComponent,
        MatProgressSpinnerModule,
        MatSliderModule
    ],
    providers: [],
    bootstrap: []
})
export class MaterialsModule { }
