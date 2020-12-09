import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NameValidator {
    static minimumTwo(control: AbstractControl): ValidationErrors | null {
        if (control.value) {
            if (control.value.trim().split(/\s+/).length < 2) {
                return { minimumTwo: true }
            }
        }

        return null;
    }
}