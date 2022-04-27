import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  routes= ['/', '/login', '/register']

  showRegisterLoginButton = true;

  constructor(router: Router) {
    router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        this.showRegisterLoginButton = this.routes.includes(e.url);
      }
    });
  }




  ngOnInit(): void {
  }

  

}
