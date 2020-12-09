import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ExpiryDateValidator {
    static expiryDate(control: AbstractControl): ValidationErrors | null {
        const input = control.value;
        if (input.match(/^(0\d|1[0-2])\/\d{2}$/)) {
            const {0: month, 1: year} = input.split("/");
        
            // get midnight of first day of the next month
            const expiry = new Date(+"20"+year, month);
            const current = new Date();
            
            if(expiry.getTime() > current.getTime()){
                return null;
            }else{
                return {expiryDate:true}
            }
            
          } {
            return {expiryDate:true}
          }
        return null;
    }
}