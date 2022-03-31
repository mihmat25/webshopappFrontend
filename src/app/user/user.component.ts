import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../../model/userDTO";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserDTO[] = [];

  constructor(private userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(successfulResponse => {
      console.log('Successful response received ' + successfulResponse);
      // @ts-ignore
      this.user = successfulResponse;
    })
  }

}
