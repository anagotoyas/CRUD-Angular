import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiBase: string = environment.apiBase;

  constructor( 
   
    private http: HttpClient,
  ) {}

  getAllOrders(){
    return this.http.get<Order[]>(`${this.apiBase}/orders`);
  }
  get(id: number){
    return this.http.get(`${this.apiBase}/orders/${id}`)
  }
  create(order: Order){
    return this.http.post(`${this.apiBase}/orders`,order)
  }
  update(order: Order){
    return this.http.put(`${this.apiBase}/orders`,order)
  }
  delete(id: number){
    return this.http.delete(`${this.apiBase}/orders/${id}`)
  }

}
