import { Component, Input, EventEmitter,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {
  form: FormGroup;
  id: number;
  isAddMode: boolean;
  dataSource: Order; 
  @Input() order: Order = new Order();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode)
    if (this.isAddMode==true){
      this.form = this.formBuilder.group({
        description: [
          this.order.description
         
        ],
        total: [
          this.order.total,
         
        ],
       
       
      });

    }
    else{
      this.getOrder(this.route.snapshot.params['id']);
      this.form = this.formBuilder.group({
        id: [this.route.snapshot.params['id'],
        console.log(this.route.snapshot.params['id'])],
        
        description: [
          this.order.description
         
        ],
        total: [
          this.order.total,
         
        ],
       
      });
    }
    
  }
  getOrder(id: number){
    this.order = new Order();
    this.orderService.get(id)
      .subscribe((data:any) => {
        //console.log(data)
        this.order = data;
        console.log(data)
        
       
      }, error => console.log(error));

  }

  onSubmite() {

    if (this.isAddMode) {
        this.save();
    } else {
        this.update();
    }
}
  save() {
  this.onSubmit.emit(this.form.value);
  }



  update() {
    this.onSubmit.emit(this.form.value);
  }
  }




