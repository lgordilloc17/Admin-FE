import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  createOrderForm() {

    this.orderForm = this.fb.group({
    });
  }

}
