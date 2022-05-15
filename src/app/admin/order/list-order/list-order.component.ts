import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderService } from '../shared/order.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  dataSource : MatTableDataSource <Order>;
  displayedColumns: string[] = ['ID','Descripcion', 'Total', 'Acciones' ];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getAllOrders()
  }
  getAllOrders(){
    this.orderService.getAllOrders().subscribe((data: any)=>{
      console.log(data)
      this.dataSource = new MatTableDataSource (data)
    })
  }
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id:number){
    const ok = confirm('¿Estás seguro de eliminar esta orden?*');
    if (ok) {
        this.orderService.delete(id).subscribe(() =>{ 
        
        window.location.reload();
        })
    }  
   }

}
