import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CardNumberValidator {
    static validNumber(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (control.value) {
            if (!/^5[1-6]/.test(value) && !/^4/.test(value) && !/^3[4-7]/.test(value)) {
                return { validNumber: true }
            }
        }
        return null;
    }

    static validLength(control: AbstractControl): ValidationErrors | null {
        // Remove all whitespaces from card number.
        const cardNumber = control.value.replace(/\s/g, '');
        if (cardNumber) {
            if (cardNumber.length < 16 || cardNumber.length > 16) {
                return { validLength: true }
            }

        }
        return null;
    }
}