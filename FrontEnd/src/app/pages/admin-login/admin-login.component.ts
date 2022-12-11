import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  login() {
    alert("Login success")
    this.router.navigateByUrl('crud');
  }




}

