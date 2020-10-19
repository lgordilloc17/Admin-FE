import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [DashboardComponent, PagesComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
