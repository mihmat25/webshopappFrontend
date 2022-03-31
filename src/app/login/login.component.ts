import { Component, OnInit } from '@angular/core';
import { UserLoginDTO } from 'src/model/userLoginDTO';
import { UserService } from 'src/service/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  passwordValue: String = '';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const loginDto: UserLoginDTO = {
      userName: this.username,
      password: this.passwordValue
    };
    this.userService.login(loginDto).subscribe(response => {
      alert("Logged in user");
      this.router.navigate(['/categories']);
    });
  }
}