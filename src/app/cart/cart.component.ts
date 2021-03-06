import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] =[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  //this.cartService.getItemsFromServer().subscribe(data => this.items = data)

  clearCart(){
    this.cartService.clearCart()
  }

  refresh(){
    this.items = this.cartService.getItems()
    window.alert('Your order is on the way to you :)');
  }

  

}
