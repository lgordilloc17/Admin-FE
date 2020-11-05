import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [DashboardComponent, PagesComponent, MenuComponent, CreateOrderComponent, CreateUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
