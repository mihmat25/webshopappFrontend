import { Component, OnInit } from '@angular/core';
import {OrderDTO} from "../../model/orderDTO";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: OrderDTO[] = [];

  constructor(private orderService: OrderService) {
    this.orderService = orderService;
  }

  ngOnInit(): void {

  }

}
