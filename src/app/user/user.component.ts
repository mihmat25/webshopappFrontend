import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User[] = [];

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
