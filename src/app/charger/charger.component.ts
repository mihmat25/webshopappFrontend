import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {CartService} from "../../service/cart.service";
import {CategoriesService} from "../../service/categories.service";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService,
              private productsService: ProductService,
              ) { }

  ngOnInit(): void {
    this.findProductsByCategoryId(4);
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
