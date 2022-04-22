import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/service/cart.service';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService) {
    this.productService = productService;
    
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(successfulResponse => {
      console.log('Successful response received ' + successfulResponse);
      // @ts-ignore
      this.products = successfulResponse;
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems())
    window.alert('Your product has been added to the cart!');
  }

}
