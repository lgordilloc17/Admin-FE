import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserOrdersTableComponent } from './user-orders-table/user-orders-table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    UserOrdersTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    UserOrdersTableComponent
  ]
})
export class ComponentsModule { }
