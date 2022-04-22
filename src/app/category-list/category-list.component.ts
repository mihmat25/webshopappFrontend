import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService = categoriesService;
  }

  ngOnInit(): void {
    this.categoriesService.findAll().subscribe(successfulResponse => {
      console.log('Successful response received ' + successfulResponse);
      // @ts-ignore
      this.categories = successfulResponse;
    })
  }

}
