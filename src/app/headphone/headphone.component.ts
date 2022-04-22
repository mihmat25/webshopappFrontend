import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.css']
})
export class HeadphoneComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductService,
              private cartService: CartService,) { }

  ngOnInit(): void {
    this.findProductsByCategoryId(3);
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
