import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../shared/order.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  updateOrder(order: Order) {
    this.orderService.update(order).subscribe(
      () => {
        this.router.navigate(['admin/orders']);
      },
      (error: any) => {}
    );
  }

}
