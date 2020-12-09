import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getValidationConfigFromCardNo } from 'src/app/helpers/card.helper';
import { ToastService } from 'src/app/service/toast.service';
import { CardNumberValidator } from 'src/app/validators/cardnumber.validator';
import { CvvValidator } from 'src/app/validators/cvv.validator';
import { ExpiryDateValidator } from 'src/app/validators/expirydate.validator';
import { NameValidator } from 'src/app/validators/name.validator';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  formGroup: FormGroup;
  cardInfo = null;
  isSubmit = false;
  get fControls() { return this.formGroup.controls; }
  readonlyFields = true;
  constructor(private fb: FormBuilder, private toastService: ToastService) {
    this.formGroup = this.fb.group({
      cardNumber: ['', [Validators.required, CardNumberValidator.validLength, CardNumberValidator.validNumber]],
      expiryDate: ['', [Validators.required, ExpiryDateValidator.expiryDate]],
      cvvCode: ['', [Validators.required]],
      nameOnCard: ['', [Validators.required, NameValidator.minimumTwo]]
    }, { validator: CvvValidator.validCvv })
  }

  ngOnInit(): void {
  }

  cardMaskFunction(rawValue: string): Array<RegExp> {
    const card = getValidationConfigFromCardNo(rawValue);
    if (card) {
      return card.mask;
    }
    return [/\d/];
  }

  updateValidation($event) {
  }

  showSuccess(message: string) {
    this.toastService.show(message, {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  showError() {
    this.toastService.show('Please fill the required field', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.formGroup.valid) {
      const formObject = this.formGroup.getRawValue();
      let message = `Dear ${formObject.nameOnCard} your payment is successfull`
      this.showSuccess(message)
    } else {
      this.showError();
    }
  }
}
