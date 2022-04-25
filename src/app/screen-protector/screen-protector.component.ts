import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-screen-protector',
  templateUrl: './screen-protector.component.html',
  styleUrls: ['./screen-protector.component.css']
})
export class ScreenProtectorComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.findProductsByCategoryId(2)
  }

  findProductsByCategoryId(categoryId: number): void {
    this.productsService.findProductsByCategoryId(categoryId).subscribe(successfulResponse => {
      console.log('Successful response received ' + successfulResponse)
      // @ts-ignore
      this.products = successfulResponse;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems())
    window.alert('Your product has been added to the cart!');
  }

}
