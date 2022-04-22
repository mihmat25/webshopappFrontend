import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { ProductCreateDTO } from 'src/dto/productCreateDTO';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "/api/webshopapp/product";

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public findAll(): Observable<Object> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    // @ts-ignore
    return this.httpClient.get(this.productUrl + '/findAll', headers);
  }

  public create(productCreateDTO: ProductCreateDTO):Observable<Product>{
    // @ts-ignore
    return this.httpClient.post(`${this.productUrl}/createProduct`, productCreateDTO);
  }

  public findProductsByCategoryId(categoryId: number): Observable<Object> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    // @ts-ignore
    return this.httpClient.get(`${this.productUrl}/findAllProductsByCategoryId?categoryId=${categoryId}`, headers);
  }

}
