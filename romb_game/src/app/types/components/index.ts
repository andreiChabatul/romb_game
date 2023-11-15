import { Observable } from "rxjs";
import { ACTIONS_BUTTON } from "src/app/const/enum";

export interface ButtonStandart extends Button {
    height: string;
    show: boolean | Observable<boolean>;
}

export interface OptionSelect {
    value: number | string;
    option: string;
}

export interface InputTextFormOption {
    nameForm: string;
    namelabel: string;
    type: string;
}

export interface ButtonMaterialOption extends Button {
    text: string;
}

export interface Button {
    action: ACTIONS_BUTTON;
    width: string;
}

export interface SelectFormOption {
    nameForm: string;
    namelabel: string;
    optionSelect: OptionSelect[];
}