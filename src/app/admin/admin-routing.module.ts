import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';

const routes: Routes = [
  {
    
      path:'',
      component: LayoutComponent,
      children: [
        {
          path: 'orders',
          component: ListOrderComponent
        },
        {
          path: 'orders/new',
          component: NewOrderComponent
        },
        {
          path: 'orders/:id/edit',
          component: UpdateOrderComponent
        }
      ]
    }
]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
