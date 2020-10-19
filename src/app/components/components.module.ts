import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserOrdersTableComponent } from './user-orders-table/user-orders-table.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuCardComponent } from './menu-card/menu-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    UserOrdersTableComponent,
    SidebarComponent,
    FooterComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    UserOrdersTableComponent,
    SidebarComponent,
    FooterComponent,
    MenuCardComponent
  ]
})
export class ComponentsModule { }
