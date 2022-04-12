import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-phone-case',
  templateUrl: './phone-case.component.html',
  styleUrls: ['./phone-case.component.css']
})
export class PhoneCaseComponent implements OnInit {

  products: Product[] = [];

  constructor(private categoriesService: CategoriesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  findProductsByCategoryId(categoryId: number): void {
    this.categoriesService.findProductsByCategoryId(categoryId).subscribe(successfulResponse => {
      console.log('Successful response received ' + successfulResponse)
      // @ts-ignore
      this.products = successfulResponse;
    });
  }

}
