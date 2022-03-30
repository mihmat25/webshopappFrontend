import { Component, OnInit } from '@angular/core';
import {ProductDTO} from "../../model/productDTO";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductDTO[] = [];

  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(successfulResponse => {
      console.log('Successful response received ' + successfulResponse);
      // @ts-ignore
      this.product = successfulResponse;
    })
  }

}
