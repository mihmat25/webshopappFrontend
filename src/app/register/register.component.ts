import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/model/registerDTO';
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
    const registerDTO: RegisterDTO = {
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
