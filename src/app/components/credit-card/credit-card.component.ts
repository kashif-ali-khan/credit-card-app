import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpiryDateValidator } from 'src/app/validators/expirydate.validator';
import {NameValidator} from 'src/app/validators/name.validator';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  formGroup: FormGroup;
  get fControls() { return this.formGroup.controls; }
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      cardNumber: ['', [Validators.required]],
      expiryDate: ['', [Validators.required,ExpiryDateValidator.expiryDate]],
      cvvCode: ['', [Validators.required]],
      nameOnCard: ['', [Validators.required,NameValidator.minimumTwo]]
    })
  }

  ngOnInit(): void {
  }

}
