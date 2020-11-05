import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup;
  usuario;
  platosAgregados = [];
  disabledUserField = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.createOrderForm();
  }

  ngOnInit() {
  }

  createOrderForm() {
    this.orderForm = this.fb.group({
      plato : ['', Validators.required],
      cantidad : ['', Validators.required],
    });
  }

  sendData() {
    if (this.platosAgregados.length > 0) {
      this.disabledUserField = true;
    } else {
      this.disabledUserField = false;
    }

    console.log(this.orderForm.value);
    this.platosAgregados.push(this.orderForm.value);
    this.orderForm.reset();
    this.disabledUserField = true;
  }

  terminarPedido() {
    const pedido = {
      user : this.usuario,
      platos: this.platosAgregados
    };
    console.log(pedido);
  }
}
