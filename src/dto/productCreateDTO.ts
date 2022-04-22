import { Category } from "src/model/category";

export class ProductCreateDTO{
    name: String;
    description: String;
    thumbnail: String;
    category: Category;
    price: number;
    stock: number;


  constructor(
    name: String, 
    description: String, 
    thumbnail: String, 
    category: Category, 
    price: number, 
    stock: number
) {
    this.name = name
    this.description = description
    this.thumbnail = thumbnail
    this.category = category
    this.price = price
    this.stock = stock
  }

}