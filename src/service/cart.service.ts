import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";
import { CartComponent } from "src/app/cart/cart.component";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = "/api/webshopapp/shoppingCart/"
  private productUrl = "/api/webshopapp/product/"

  items: Product[] =[];
  

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // public addToCart(product: Product):Observable<any>{
  //   return this.httpClient.post(this.cartUrl + '/addToCart', product)
  // }

  addToCart(product: Product) {
    console.log(sessionStorage['items'])
    let list = this.getItems();
    list.push(product);
    this.setItems(list);
   console.log(sessionStorage['items']) 

  }

  getItems(): Product[] {
    return JSON.parse(sessionStorage['items'] || '[]')
  }

  setItems(list: Product[]){
    sessionStorage['items'] = JSON.stringify(list);
  }

  getItemsFromServer(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productUrl + '/findAll')
  }

  clearCart() {
    sessionStorage['items'] = [];
    return sessionStorage['items'];
  }

  // checkout(){
  //   return this.httpClient.post(this.cartUrl + '/checkout')
  // }

  
  
}
