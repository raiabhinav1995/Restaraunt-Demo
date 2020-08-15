import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenulistComponent } from './components/menulist/menulist.component';


const routes: Routes =
[
  {path: '',component: MenulistComponent},
  {path: 'orders',component: OrdersummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
