import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createUserForm();
  }

  ngOnInit() {
  }

  createUserForm() {
    this.userForm = this.fb.group({
      nombre : ['', Validators.required],
      apellidos : ['', Validators.required],
      direccion : ['', Validators.required],
      telefono : ['', Validators.required]
    });
  }

  saveUser() {
    Swal.fire({
      title: 'Usuario Agregado!',
      icon: 'success'
    });
  }
}
