import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import { ProductService } from 'src/service/product.service';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-phone-case',
  templateUrl: './phone-case.component.html',
  styleUrls: ['./phone-case.component.css']
})
export class PhoneCaseComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductService,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findProductsByCategoryId(1);
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
