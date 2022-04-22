import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLoginDTO} from "../dto/userLoginDTO";
import {User} from "../model/user";
import {Register } from 'src/model/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "/api/webshopapp/user";

  optionsWithAuthorizationHeader = {};

  private userDto: User | undefined;
  private registerDto: Register | undefined;

  private httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public findAll(): Observable<Object> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    // @ts-ignore
    return this.httpClient.get(this.userUrl + '/findAll', headers);
  }

  getUser(): User | undefined {
    return this.userDto;
  }

  setUser(user: User): void {
    this.userDto = user;
  }

  public login(loginDTO: UserLoginDTO): Observable<any> {
    this.optionsWithAuthorizationHeader = {
      headers: {
        Authorization: 'Basic ' + btoa(loginDTO.userName + ':' + loginDTO.password)
      }
    }
    return this.httpClient.post(this.userUrl + '/login', loginDTO, this.optionsWithAuthorizationHeader);
  }

  public signup(registerDTO: Register): Observable<any>{
    return this.httpClient.post(`${this.userUrl}/signup`, registerDTO);
  }
}
