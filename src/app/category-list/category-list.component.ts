import { Component, OnInit } from '@angular/core';
import {CategoryDTO} from "../../model/categoryDTO";
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: CategoryDTO[] = [];

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
