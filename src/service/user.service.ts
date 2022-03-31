import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLoginDTO} from "../model/userLoginDTO";
import {UserDTO} from "../model/userDTO";
import {RegisterDTO } from 'src/model/registerDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "/api/webshopapp/user";

  optionsWithAuthorizationHeader = {};

  private userDto: UserDTO | undefined;
  private registerDto: RegisterDTO | undefined;

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

  getUser(): UserDTO | undefined {
    return this.userDto;
  }

  setUser(user: UserDTO): void {
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

  public signup(registerDTO: RegisterDTO): Observable<any>{
    return this.httpClient.post(`${this.userUrl}/signup`, registerDTO);
  }
  //   this.optionsWithAuthorizationHeader = {
  //     headers:{
  //       Authorization: 'Basic' + btoa(registerDTO.userName + ':' + registerDTO.password + ':' + registerDTO.passwordConfirm)
  //     }
  //   }

  //   return this.httpClient.post(this.userUrl + '/signup', registerDTO, this.optionsWithAuthorizationHeader)
  // }

  isAuthenticated(): boolean {
    if (this.userDto != null) {
      return true;
    }
    return false;
  }
}
