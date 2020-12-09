import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CvvValidator {
    static validCvv(formGroup: FormGroup): ValidationErrors | null {
        const cardvalue = formGroup.get("cardNumber").value;
        const cvvvalue = formGroup.get("cvvCode").value;
        if (/^5[1-6]/.test(cardvalue) || /^4/.test(cardvalue)) {
            if (cvvvalue.length < 3 || cvvvalue.length > 3) {
                return { validCvv: true }
            }

        } else if (/^3[4-7]/.test(cardvalue)) {
            if (cvvvalue.length < 4 || cvvvalue.length > 4) {
                return { validCvv: true }
            }

        }

        return null;
    }
}