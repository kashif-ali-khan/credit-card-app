import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  activePanel = ["creditcard"];
  constructor() { }

  ngOnInit(): void {
  }
  openPanel(panelName: string) {
    this.activePanel = [panelName];
  }

}
