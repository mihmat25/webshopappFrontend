import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from "../../model/product";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  // @Input()
  // selectedProduct:Product | undefined
  constructor(private cartService:CartService) { }

  // addToCart(){
  //   // @ts-ignore
  //   alert(this.selectedProduct.name);
  //   this.cartService.addToCart(this.selectedProduct);
  // }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

  

}
