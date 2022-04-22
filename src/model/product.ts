import {Category} from "./category";

export class Product {

  id: String;
  name: String;
  description: String;
  thumbnail: String;
  category: Category;
  price: number;
  stock: number;


  constructor(id: String, name: String, description: String, thumbnail: String, category: Category, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}
