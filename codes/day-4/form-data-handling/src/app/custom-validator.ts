import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static length(control: AbstractControl): ValidationErrors | null {
        if (control) {
            const value = control.value as string
            if (value.length >= 6 && value.length <= 10) {
                return null;
            } else {
                return {
                    length: {
                        max: 10,
                        min: 6,
                        current: value.length
                    }
                }
            }
        } else
            return null
    }
}

// interface VE {
//     [key: string]: any;
// }