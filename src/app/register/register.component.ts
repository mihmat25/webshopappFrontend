import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/model/register';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: String = '';
  password: String = '';
  passwordConfirm: String = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(): void {
    const registerDTO: Register = {
      userName: this.userName,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    };
    this.userService.signup(registerDTO).subscribe(response => {
      alert("User registered");
      this.router.navigate(['/categories']);
    });
  }

}
