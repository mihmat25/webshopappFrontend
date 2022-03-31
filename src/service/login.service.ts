import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private productsUrl = "api/webshopapp/login";

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


}