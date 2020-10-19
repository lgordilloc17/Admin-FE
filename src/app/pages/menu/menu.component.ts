import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  agregarPlato() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Nombre',
        text: 'Por favor ingresar el nombre del plato'
      },
      {
        title: 'Valor',
        text: 'Ingresar el precio por unidad'
      }
    ]).then((result: any) => {
      if (result.value) {
        console.log(result.value);
        Swal.fire({
          title: 'Excelente!',
          icon: 'success',
          html: `Plato agregado!`,
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }

}
