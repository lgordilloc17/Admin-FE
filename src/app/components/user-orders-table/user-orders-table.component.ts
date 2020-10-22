import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { mockPedidosBE } from '../../../../pedidos';

@Component({
  selector: 'app-user-orders-table',
  templateUrl: './user-orders-table.component.html',
  styleUrls: ['./user-orders-table.component.scss']
})
export class UserOrdersTableComponent implements OnInit {

  pedidosClientesArray = mockPedidosBE;

  constructor() { }

  ngOnInit() {
  }

  finalizarPedido() {
    Swal.fire(
      {
        icon: 'question',
        title: 'Desea completar este pedido?',
        text: 'El status se actualizará a completado.',
        confirmButtonText: 'Completar',
        confirmButtonColor: 'green',
      }
    );
  }

  editarPedido() {

  }

  eliminarPedido() {

  }

}
