import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'menu', component: MenuComponent },
            { path: 'crear-orden', component: CreateOrderComponent },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
