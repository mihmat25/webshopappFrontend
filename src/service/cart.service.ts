import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = "/api/webshopapp/shoppingCart/"

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public addToCart(product: Product | undefined):Observable<any>{
    return this.httpClient.post(this.cartUrl + '/addToCart', product)
  }
}
