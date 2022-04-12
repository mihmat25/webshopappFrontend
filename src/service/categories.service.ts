import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesUrl = "/api/webshopapp/category";

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public findAll(): Observable<Object> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    // @ts-ignore
    return this.httpClient.get(this.categoriesUrl + '/findAll', headers);
  }

  public findProductsByCategoryId(categoryId: number): Observable<Object> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    // @ts-ignore
    return this.httpClient.get(this.categoriesUrl + '/findAllProductsByCategoryId', headers);
  }

}
