import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { NewOrderComponent } from './order/new-order/new-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormOrderComponent } from './order/shared/form-order/form-order.component';


@NgModule({
  declarations: [
    
    NewOrderComponent,
    UpdateOrderComponent,
    ListOrderComponent,
    LayoutComponent,
    FormOrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class AdminModule { }
